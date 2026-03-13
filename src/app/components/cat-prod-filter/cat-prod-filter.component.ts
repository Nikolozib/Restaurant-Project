import { Component } from '@angular/core';
import { ApiService } from '../../sevices/api-service.service';

@Component({
  selector: 'app-cat-prod-filter',
  templateUrl: './cat-prod-filter.component.html',
  styleUrl: './cat-prod-filter.component.scss'
})
export class CatProdFilterComponent {
  categories: any = []
  products: any = []
  productsForShow:any=[]
  products1: any = []
  nut: boolean = false
  veg:boolean=false
  spiciness: any = "Not Chosen"
  range: number = 0
  rangeForShow:string | number ="Not Chosen"

  constructor(public apiService: ApiService) {
    this.getAllProducts()
  }

  ngOnInit(){
    this.apiService.getAllProducts().subscribe((data:any)=>{
      this.products=data
      this.productsForShow=data  
    })
    this.apiService.getCategories().subscribe((data: any) => {
      this.categories = data
    })
  }



  getAllProducts() {
    this.apiService.getAllProducts().subscribe((data) => {
      this.productsForShow = data
    })
  }

  rangechange(){
    if(this.range == 0){
      this.spiciness = "Not Chosen"
      this.rangeForShow="Not Chosen"
    }else {
      this.spiciness = this.range - 1
      this.rangeForShow=this.range
    }
  }

  reset() {
    this.spiciness = "Not Chosen"
    this.range = 0
    this.veg=false
    this.nut=false
  }

  // filter(){
  //   this.productsForShow = []
  //   for(let i = 0; i < this.products.length; i++){
  //     if(this.rangeForShow == "Not Chosen"){
  //       if(this.products[i].nuts !== this.nut && this.products[i].vegetarian==this.veg){
  //         this.productsForShow.push(this.products[i])
  //       }
  //     }else{
  //       if(this.products[i].nuts !== this.nut && this.products[i].vegeterian == this.veg && this.products[i].spiciness == this.range - 1){
  //         this.productsForShow.push(this.products[i])
  //       }
  //     }
  //   }
  // }


  categoryFilter(id: any) {
    this.apiService.getCategoryById(id).subscribe((data: any) => {
      this.productsForShow=data.products
    })
  }


  Filter(nuts:boolean,vegetarian:boolean,spiciness:any){
    this.apiService.productsFilter(nuts,vegetarian,spiciness).subscribe((data:any)=>{
      this.productsForShow=data.products
    })
  }

}