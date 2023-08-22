import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAddress } from 'src/app/models/address.model';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css'],
})
export class CreateAddressComponent implements OnInit {
  constructor(private router: Router, private addressService: AddressService) {}

  ngOnInit(): void {}

  submit(name: string, city: string, street: string, building: string, apartment: string) {
    const address: IAddress = {
      Id: Date.now().toString(),
      name: name || '',
      city: city || '',
      street: street || '',
      building: building || '',
      apartment: apartment || ''
    };

    this.addressService.create(address).subscribe(() => {
      this.router.navigate(['/address-book']);
    });
  }
}
