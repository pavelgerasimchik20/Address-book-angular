import { Component, OnInit } from '@angular/core';
import { Address } from '../../models/address.model';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css'],
})
export class AddressBookComponent implements OnInit {

  constructor(public productService: ProductService) {}
  
    searchString: string = '';
    loading = false;


  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe(() => {
      this.loading = false;
      console.log(this.productService.products)
    });
  }

  onDeleteAddress(id: number) {}

}
