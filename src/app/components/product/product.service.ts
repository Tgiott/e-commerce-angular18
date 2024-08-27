import { Product } from './product.model';
import { Injectable } from '@angular/core';
import {  MatSnackBar } from "@angular/material/snack-bar"
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import {map, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    baseUrl ="http://localhost:3001/Produtos"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string, isError: boolean =false ):void
   {
    this.snackBar.open(msg, "", 
    { duration: 1000, 
      horizontalPosition: "right",
       verticalPosition: "top",
       panelClass: isError? ['msg-error'] : ['msg-sucess']
    })

  }
  createProduct(product: Product): Observable<Product> 
  {

   return this.http.post<Product>(this.baseUrl,product).pipe(
     map(obj => obj),
     catchError(e => this.errorHandler(e))
   )

  }
 readProduct() :Observable<Product[]>
 {
 return this.http.get<Product[]>(this.baseUrl)
 }
 readbyId(id: number): Observable<Product>
 {
  const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
 }

 updateProduct(product: Product): Observable<Product>
 {
  const url = `${this.baseUrl}/${product.id}`
  return this.http.put<Product>(url,product).pipe(
    map(obj => obj),
    catchError(e => this.errorHandler(e))
  )
 }
 
 deleteProduct(id: number): Observable<Product> 
 {
  const url = `${this.baseUrl}/${id}`
  return this.http.delete<Product>(url).pipe(
    map(obj => obj),
    catchError(e => this.errorHandler(e))
  )
 }
 
 errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage("Ocorreu um erro! ", true)
    return EMPTY
  }


}