import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product ={
    name: null,
    price: null,
    categoria: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(
      () => {
        this.productService.showMessage(" Operacao Realizada com sucesso!")
        this.router.navigate(["/products"])

      }
    )
  }
  cancel(): void {
    this.router.navigate(["/products"])
  }

}
