import { Component } from '@angular/core';
import { ApiService } from '../../sevices/api-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories:any
  constructor(public apiService:ApiService){}

  ngOnInit(){
    this.apiService.getCategories().subscribe((data:any)=>{
      this.categories=data
    })
  }
}
