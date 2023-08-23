import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css'],
})
export class AddressBookComponent implements OnInit {

  constructor(public addressService: AddressService) {}
  
    searchString: string = '';
    loading = false;


  ngOnInit(): void {
    this.loading = true;
    this.addressService.getAll().subscribe(() => {
      this.loading = false;
    });
  }

  handleDelete(deletedId: string) {
    // Logic to handle the deletion in parent component if needed
    const index = this.addressService.addresses.findIndex(address => address.Id === deletedId);
    if (index !== -1) {
        this.addressService.addresses.splice(index, 1);
    }
}

}
