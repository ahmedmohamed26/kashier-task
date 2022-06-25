import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsFilter',
})
export class ProductsPipe implements PipeTransform {
  transform(products: any, term: string): any {
    if (!products || !term) return products;

    return products.filter(
      (product: any) =>
        product.name.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  }
}
