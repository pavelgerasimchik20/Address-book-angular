import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { CreateAddressComponent } from './components/create-address/create-address.component';

const routes: Routes = [
  { path: 'home', component: DefaultPageComponent },
  { path: 'address-book', component: AddressBookComponent },
  { path: 'create-address', component: CreateAddressComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
