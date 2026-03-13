import { Component } from '@angular/core';
import { ApiService } from '../../sevices/api-service.service';


@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss'
})
export class CartItemsComponent {
  products: any
  total!:number
  qtn!:number
  price!:number
  TotalValue!:number
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getBasket().subscribe((data: any) => {
      this.products = data
    });
  }
  Total(){
    this.TotalValue=this.qtn*this.price
    console.log(this.TotalValue)
  }
}
