import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { RocketSmokeComponent } from './components/rocket-smoke/rocket-smoke.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { AddressItemComponent } from './components/address-item/address-item.component';
import { CreateAddressComponent } from './components/create-address/create-address.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterProductsPipe } from './pipes/filter-products.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    DefaultPageComponent,
    RocketSmokeComponent,
    CloudComponent,
    AddressItemComponent,
    CreateAddressComponent,
    ProductComponent,
    FilterProductsPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
