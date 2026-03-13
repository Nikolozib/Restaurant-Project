import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CartpageComponent } from './pages/cartpage/cartpage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'Cart',component:CartpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
