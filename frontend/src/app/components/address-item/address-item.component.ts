import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IAddress } from '../../models/address.model';
import { AddressService } from 'src/app/services/address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.css'],
})
export class AddressItemComponent {
  constructor(private router: Router, private addressService: AddressService) {}

  @Input() address: IAddress;
  @Output() delete = new EventEmitter<string>();

  onDelete() {
    if (confirm('Are you sure you want to delete this address?')) {
      this.addressService.delete(this.address.Id).subscribe({
        next: () => {
          this.delete.emit(this.address.Id);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log('Address deleted successfully.');
          this.router.navigate(['/address-book']);
        },
      });
    }
  }

  openAddress(id: string) {
    this.addressService.getById(id).subscribe({
      next: () => {
        console.log(id)
        console.log(this.addressService.address)
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Address passed successfully.');
        this.router.navigate(['/address-card', id]);
      },
    });
    
  }
}
