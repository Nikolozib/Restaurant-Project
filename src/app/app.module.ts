import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackgroundComponent } from './components/background/background.component';
import { FilterComponent } from './components/filter/filter.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { SecNavbarComponent } from './components/sec-navbar/sec-navbar.component';
import { CartMenuComponent } from './components/cart-menu/cart-menu.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { SecBackgroundComponent } from './components/sec-background/sec-background.component';
import { HttpClientModule } from '@angular/common/http';
import { CatProdFilterComponent } from './components/cat-prod-filter/cat-prod-filter.component';






@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CartpageComponent,
    NavbarComponent,
    CategoriesComponent,
    FooterComponent,
    BackgroundComponent,
    FilterComponent,
    FoodListComponent,
    SecNavbarComponent,
    CartMenuComponent,
    CartItemsComponent,
    SecBackgroundComponent,
    CatProdFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
