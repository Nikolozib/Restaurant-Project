import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL="https://restaurant.stepprojects.ge/api/"

  constructor(private http:HttpClient) { }


  getAllProducts(){
    return this.http.get(this.apiURL + "Products/GetAll")
  }

  getCategories(){
    return this.http.get(this.apiURL + "Categories/GetAll")
  }

  getBasket() {
    return this.http.get(this.apiURL + "Baskets/GetAll")
  }

  addToBasket(id: number) {
    let bask = {
      "quantity": 0,
      "price": 0,
      "productId": id
    }
    return this.http.post(this.apiURL + "Baskets/AddToBasket", bask).subscribe((data) => {
      console.log(data)
    })
  }

  deleteProduct(id: number) {
    return this.http.delete(this.apiURL + `Baskets/DeleteProduct/${id}`).subscribe((data) => {
      console.log(data)
    })
  }

  editProduct(quantity: any, id: any) {
    let putReq = {
      "quantity": quantity,
      "price": 0,
      "productId": id
    }
    return this.http.put(this.apiURL + `Baskets/UpdateBasket`, putReq).subscribe((data) => {
      console.log(data)
    })
  }

  getCategoryById(id: number) {
    return this.http.get(this.apiURL + `Categories/GetCategory/${id}`)
  }

  productsFilter(vegetarian:boolean,nuts:boolean,spiciness:boolean){
    return this.http.get('https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=true&nuts=false&spiciness=1')
  }
}