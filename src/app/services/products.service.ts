import { Injectable } from '@angular/core';
import { Iproduct, Offers } from '../Models/iproduct';
import { Icategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  categoryList: Icategory[];

  productsList: Iproduct[];
  // productsList: Iproduct = {} as Iproduct;

  constructor() {
    this.productsList = [
      {
        id: 1,
        name: 'Cory Nightstand',
        quantity: 0,
        price: 2499,
        categoryID: 1,
        Material: 'Engineered Wood',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/162857037-162857037-HC25102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
        offer: Offers.zeroPercent,
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem quaerat obcaecati repellat consequuntur consequatur aut. Necessitatibus, at magni. Animi ab natus laudantium dolorum at officiis maxime a saepe vitae.',
      },
      {
        id: 2,
        name: 'Anri Nightstand',
        quantity: 1,
        price: 3699,
        categoryID: 1,
        Material: 'Engineered Wood',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/162776692-162776692-HC01112020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
        offer: Offers.tenPercent,
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem quaerat obcaecati repellat consequuntur consequatur aut. Necessitatibus, at magni. Animi ab natus laudantium dolorum at officiis maxime a saepe vitae.',
      },
      {
        id: 3,
        name: 'Linda 3-Seater Fabric Sofa Bed',
        quantity: 3,
        price: 11699,
        categoryID: 2,
        Material: 'Solid Wood',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/161937180-161937180-HC301019_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
        offer: Offers.fifteenPercent,
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem quaerat obcaecati repellat consequuntur consequatur aut. Necessitatibus, at magni. Animi ab natus laudantium dolorum at officiis maxime a saepe vitae.',
      },
      {
        id: 4,
        name: 'Carmel 3-Seater Velvet Sofa Bed',
        quantity: 0,
        price: 16599,
        categoryID: 2,
        Material: 'Solid Wood',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/163710693-163710693-HC23082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
        offer: Offers.tenPercent,
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem quaerat obcaecati repellat consequuntur consequatur aut. Necessitatibus, at magni. Animi ab natus laudantium dolorum at officiis maxime a saepe vitae.',
      },
      {
        id: 5,
        name: 'Meadow Wooden Top Coffee Table',
        quantity: 8,
        price: 1793,
        categoryID: 3,
        Material: 'Solid Wood',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/163906877-163906877-HC13042022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
        offer: Offers.fifteenPercent,
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem quaerat obcaecati repellat consequuntur consequatur aut. Necessitatibus, at magni. Animi ab natus laudantium dolorum at officiis maxime a saepe vitae.',
      },
      {
        id: 6,
        name: 'Bonita Marble Top Coffee Table',
        quantity: 0,
        price: 11999,
        categoryID: 3,
        Material: 'Marble',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/159661446-159661446-HCB1191OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
        offer: Offers.zeroPercent,
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem quaerat obcaecati repellat consequuntur consequatur aut. Necessitatibus, at magni. Animi ab natus laudantium dolorum at officiis maxime a saepe vitae.',
      },
      {
        id: 7,
        name: 'Dublin Desk with Hutch',
        quantity: 3,
        price: 12999,
        categoryID: 4,
        Material: 'Engineered Wood',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/155418301-155418301-HCB41AUG15_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
        offer: Offers.zeroPercent,
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem quaerat obcaecati repellat consequuntur consequatur aut. Necessitatibus, at magni. Animi ab natus laudantium dolorum at officiis maxime a saepe vitae.',
      },
      {
        id: 8,
        name: 'Canova Corner Desk',
        quantity: 6,
        price: 20999,
        categoryID: 4,
        Material: 'Engineered Wood',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/161618330-161618330-HC300719_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
        offer: Offers.fifteenPercent,
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem quaerat obcaecati repellat consequuntur consequatur aut. Necessitatibus, at magni. Animi ab natus laudantium dolorum at officiis maxime a saepe vitae.',
      },
    ];
    this.categoryList = [
      { id: 1, name: 'nightstands' },
      { id: 2, name: 'Sofa Beds & Day Beds' },
      { id: 3, name: 'Coffee Tables' },
      { id: 4, name: 'Office Desks' },
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
