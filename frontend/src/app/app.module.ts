import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { RocketSmokeComponent } from './components/design/rocket-smoke/rocket-smoke.component';
import { CloudComponent } from './components/design/cloud/cloud.component';
import { AddressItemComponent } from './components/address-item/address-item.component';
import { CreateAddressComponent } from './pages/create-address/create-address.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterAddressPipe } from './pipes/filter-address.pipe';
import { AddressCardComponent } from './components/address-card/address-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    DefaultPageComponent,
    RocketSmokeComponent,
    CloudComponent,
    AddressItemComponent,
    CreateAddressComponent,
    FilterAddressPipe,
    AddressCardComponent
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
