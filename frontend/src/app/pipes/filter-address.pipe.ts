import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../models/address.model';

@Pipe({
  name: 'filterAddress'
})
export class FilterAddressPipe implements PipeTransform {

  transform(products: IAddress[], search: string): IAddress[] {
    // Important ! status: doesnt work line 12
    // here I added additional checking to display new item whish was added
    if(search.length === 0) return products // without this line we cant see new item 

    return products.filter(el => el.name.toLowerCase().includes(search.toLowerCase()));
  }

}
