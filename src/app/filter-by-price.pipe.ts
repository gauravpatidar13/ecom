import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'filterByPrice'
})
export class FilterByPricePipe implements PipeTransform {

  transform(products: Product[], filterBy: number): Product[] {
console.log(!filterBy)
    if (!products || !filterBy) {
      return products;
    }

    switch (filterBy) {
      case 1:
        return products.filter(product =>
          parseInt(product.price) < 100)
      case 2:
        return products.filter(product =>
          parseInt(product.price) > 100 && parseInt(product.price) < 200)
      case 3:
        return products.filter(product =>
          parseInt(product.price) > 200)
    }

  }
}
