import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../models/address.model';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.css']
})
export class AddressItemComponent {
  @Input() product: IProduct;
  @Input() address: Address;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.address.id);
  }
}
