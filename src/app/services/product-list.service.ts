import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { ProductsListComponent } from '../component/products-list/products-list.component';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  productsList: Iproduct[];

  constructor() {
    this.productsList = [
      {
        id: 1,
        name: 'Assel Wooden Top Coffee Table',
        quantity: 0,
        price: 1200,
        categoryID: 1,
        Material: 'Mirror',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/163906875-163906875-HC13042022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem quaerat obcaecati repellat consequuntur consequatur aut. Necessitatibus, at magni. Animi ab natus laudantium dolorum at officiis maxime a saepe vitae.',
      },
      {
        id: 2,
        name: 'Espresso TV Unit',
        quantity: 1,
        price: 3200,
        categoryID: 3,
        Material: 'Engineered Wood',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/165358428-165358428-HC10022023_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem quaerat obcaecati repellat consequuntur consequatur aut. Necessitatibus, at magni. Animi ab natus laudantium dolorum at officiis maxime a saepe vitae.',
      },
      {
        id: 3,
        name: 'Cazo Riva 4-Tier Kitchen Trolley with Shelves and Drawer',
        quantity: 3,
        price: 1200,
        categoryID: 3,
        Material: 'Engineered Wood',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/158817405-158817405-HCB1375JAN18_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem quaerat obcaecati repellat consequuntur consequatur aut. Necessitatibus, at magni. Animi ab natus laudantium dolorum at officiis maxime a saepe vitae.',
      },
    ];
  }
  getAllProducts(): Iproduct[] {
    return this.productsList;
  }
  performFilter(filterValue: any): Iproduct[] {
    // filterValue = filterValue.toLowerCase();
    return this.productsList.filter((prd: Iproduct) =>
      prd.price.toString().includes(filterValue.toString())
    );
  }
  getPrdById(prdId: number): Iproduct | undefined {
    return this.productsList.find((prd) => prd.id == prdId);
  }
  // get array of products Ids
  getPrdIdsList(): number[] {
    return this.productsList.map((prd) => prd.id);
  }
}
