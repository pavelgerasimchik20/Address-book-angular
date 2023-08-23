import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { IAddress } from 'src/app/models/address.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css'],
})
export class AddressCardComponent implements OnInit {
  address: IAddress;

  constructor(private addressService: AddressService, private router: Router) {}

  ngOnInit(): void {
    this.address = this.addressService.address;
  }

  onUpdate(id: string) {
    this.addressService.update(id, this.address).subscribe({
      next: () => {},
      error: () => {},
      complete: () => {
        this.router.navigate(['/address-book']);
      },
    });
    console.log(this.address);
  }
}
