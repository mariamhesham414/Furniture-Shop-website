import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct, Offers } from 'src/app/Models/iproduct';
import { Discounts, Store } from 'src/app/Models/store';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // ass1
  store: Store = new Store(
    'Store',
    ['branch1 ', 'branch2 ', 'branch3 '],
    '/assets/hand-drawn-doodle-background_23-2149974133.webp',
    Discounts.fifteenPercent
  );
  // ass2
  ClientName: string = 'Mariam';
  // productsList: Iproduct[];
  categoryList: Icategory[] = [];
  showDiv: boolean = false;
  isFilter: boolean = false;
  selectCategory: number = 0;
  listPrice: number = 0;
  filteredProducts: Iproduct[] = [];
  date2: Date = new Date();
  creditCard: string = '1234567891234567';

  // ass4
  count: number = 1;
  // @Input() set onPriceChange(value: string) {
  //   if (this.listPrice == 0) {
  //     this.filteredProducts = this.productsList;
  //   } else {
  //     this.filteredProducts = this.performFilter(value);
  //   }
  // }
  @Input() set listFilterInChild(value: string) {
    // this.filteredProducts = this.performFilter(value);
    // day5
    this.filteredProducts = this.prdService.performFilter(value);
  }
  // filter data
  // performFilter(filterValue: any): Iproduct[] {
  //   // filterValue = filterValue.toLowerCase();
  //   return this.productsList.filter((prd: Iproduct) =>
  //     prd.price.toString().includes(filterValue.toString())
  //   );
  // }

  // performFilter(filterValue: string): Iproduct[] {
  //   filterValue = filterValue.toLowerCase();
  //   return this.productsList.filter((prd: Iproduct) =>
  //     prd.name.toLowerCase().includes(filterValue)
  //   );
  // }
  // end ass4
  // nightstands:1 , Sofa Beds & Day Beds:2 , Coffee Tables:3 , Office Desks:4

  // day5 => inject
  constructor(private prdService: ProductsService, private router: Router) {
    // #########################
    // this.productsList = [
    //   {
    //     id: 1,
    //     name: 'Cory Nightstand',
    //     quantity: 0,
    //     price: 2499,
    //     categoryID: 1,
    //     Material: 'Engineered Wood',
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/162857037-162857037-HC25102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //     offer: Offers.zeroPercent,
    //   },
    //   {
    //     id: 2,
    //     name: 'Anri Nightstand',
    //     quantity: 1,
    //     price: 3699,
    //     categoryID: 1,
    //     Material: 'Engineered Wood',
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/162776692-162776692-HC01112020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //     offer: Offers.tenPercent,
    //   },
    //   {
    //     id: 3,
    //     name: 'Linda 3-Seater Fabric Sofa Bed',
    //     quantity: 3,
    //     price: 11699,
    //     categoryID: 2,
    //     Material: 'Solid Wood',
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/161937180-161937180-HC301019_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //     offer: Offers.fifteenPercent,
    //   },
    //   {
    //     id: 4,
    //     name: 'Carmel 3-Seater Velvet Sofa Bed',
    //     quantity: 0,
    //     price: 16599,
    //     categoryID: 2,
    //     Material: 'Solid Wood',
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/163710693-163710693-HC23082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //     offer: Offers.tenPercent,
    //   },
    //   {
    //     id: 5,
    //     name: 'Meadow Wooden Top Coffee Table',
    //     quantity: 8,
    //     price: 1793,
    //     categoryID: 3,
    //     Material: 'Solid Wood',
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/163906877-163906877-HC13042022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //     offer: Offers.fifteenPercent,
    //   },
    //   {
    //     id: 6,
    //     name: 'Bonita Marble Top Coffee Table',
    //     quantity: 0,
    //     price: 11999,
    //     categoryID: 3,
    //     Material: 'Marble',
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/159661446-159661446-HCB1191OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //     offer: Offers.zeroPercent,
    //   },
    //   {
    //     id: 7,
    //     name: 'Dublin Desk with Hutch',
    //     quantity: 3,
    //     price: 12999,
    //     categoryID: 4,
    //     Material: 'Engineered Wood',
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/155418301-155418301-HCB41AUG15_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //     offer: Offers.zeroPercent,
    //   },
    //   {
    //     id: 8,
    //     name: 'Canova Corner Desk',
    //     quantity: 6,
    //     price: 20999,
    //     categoryID: 4,
    //     Material: 'Engineered Wood',
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/161618330-161618330-HC300719_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //     offer: Offers.fifteenPercent,
    //   },
    // ];
    // this.categoryList = [
    //   { id: 1, name: 'nightstands' },
    //   { id: 2, name: 'Sofa Beds & Day Beds' },
    //   { id: 3, name: 'Coffee Tables' },
    //   { id: 4, name: 'Office Desks' },
    // ];
  }
  // ass4
  @Output() newPrdCart = new EventEmitter<Iproduct>();
  addNewCart(val: Iproduct, counter: number = 1) {
    // if(!this.newPrdCart.some((item)=>item.id == val.id) ){

    // }
    this.newPrdCart.emit(val);
  }
  // end ass4
  ngOnInit(): void {
    // this.filteredProducts = Array.from(this.productsList);
    // day5
    this.filteredProducts = Array.from(this.prdService.getAllProducts());
  }
  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  onCategoryChange(event: Iproduct) {
    if (this.selectCategory == 0) {
      // this.filteredProducts = this.productsList;
      // day5
      this.filteredProducts = this.prdService.getAllProducts();
    } else {
      // this.filteredProducts = this.productsList.filter(
      // day5
      this.filteredProducts = this.prdService
        .getAllProducts()
        .filter((p: any) => p.categoryID == event);
    }
  }

  buyPrd(prd: Iproduct) {
    if (prd.quantity >= 1) {
      prd.quantity--;
    }
  }
  // day5
  productDetails(prdId: number) {
    console.log(prdId);
    this.router.navigate(['/prdDetails', prdId]);
  }
}
