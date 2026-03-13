import { Component } from '@angular/core';
import { ApiService } from '../../sevices/api-service.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent {
  [x: string]: any;
  products:any
  constructor(public apiService:ApiService){}

  ngOnInit(){
    this.apiService.getAllProducts().subscribe((data:any)=>{
      this.products=data
    })
  }
}
