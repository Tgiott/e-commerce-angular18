import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product
  constructor(private producService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void{

    const id = +this.route.snapshot.paramMap.get("id");

    this.producService.readbyId(id).subscribe(product =>
      this.product = product )


  }
  
  deleteProduct(): void {

    this.producService.deleteProduct(this.product.id).subscribe(
      () => {
        this.producService.showMessage("Produto apagado com sucesso!")
        this.router.navigate(["/products"])
      }
    )
  }

  cancel():void{
    this.router.navigate(["/products"])
  }
  }


