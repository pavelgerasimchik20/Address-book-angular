import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product.model';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    // Important ! status: doesnt work line 12
    // here I added additional checking to display new item whish was added
    if(search.length === 0) return products // without this line we cant see new item 

    return products.filter(el => el.title.toLowerCase().includes(search.toLowerCase()));
  }

}
