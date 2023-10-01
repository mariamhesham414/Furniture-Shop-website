import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { TrackInfo } from 'src/app/Models/track-info';
import { ProductListService } from 'src/app/services/product-list.service';
import { ProductsListWithApiService } from 'src/app/services/products-list-with-api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  // track:TrackInfo=new TrackInfo("","",[])
  // track2:TrackInfo=new TrackInfo("","",[])
  // track3:TrackInfo=new TrackInfo("","",[])
  // track4:TrackInfo=new TrackInfo("","",[])

  // [{},{},{}]
  // str:string[]
  // array => store objects
  // array of objects
  // productsList: Iproduct[];
  showImage: boolean = true;
  // user: string = 'user name ';
  // set
  // get

  filteredProducts: Iproduct[] = [];

  // set listFilter(value: string) {
  //   console.log('In setter: ', value);

  //   this.filteredProducts = this.performFilter(value);
  //   console.log(this.filteredProducts);
  // }
  // -------------------------------------------
  // day4
  // filter data
  @Input() set listFilterInChild(value: string) {
    this.filteredProducts = this.prdService.performFilter(value);
  }

  // -------------------------------------------
  // day4

  // new:EventEmitter; ------------->
  // or
  @Output() newPrdInCartEvent = new EventEmitter<Iproduct>();

  // -------------------------------------------

  // Day6 => inject product api service

  // tables:1 , chairs:2 , tv units:3
  constructor(
    private prdService: ProductListService,
    private router: Router,
    private prdApiService: ProductsListWithApiService
  ) {
    // this.productsList = [
    //   {
    //     id: 1,
    //     name: 'Assel Wooden Top Coffee Table',
    //     quantity: 0,
    //     price: 1200,
    //     categoryID: 1,
    //     Material: 'Mirror',
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/163906875-163906875-HC13042022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    //   {
    //     id: 2,
    //     name: 'Espresso TV Unit',
    //     quantity: 1,
    //     price: 3200,
    //     categoryID: 3,
    //     Material: 'Engineered Wood',
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/165358428-165358428-HC10022023_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    // ];
  }
  ngOnInit(): void {
    // this.filteredProducts = this.productsList;
    // Day5
    // this.filteredProducts = Array.from(this.prdService.getAllProducts());
    // Day6
    this.prdApiService.getAllProducts().subscribe((data) => {
      console.log(data);

      this.filteredProducts = data;
    });
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  // filter data
  // performFilter(filterValue: string): Iproduct[] {
  //   filterValue = filterValue.toLowerCase();
  //   return this.productsList.filter((prd: Iproduct) =>
  //     prd.name.toLowerCase().includes(filterValue)
  //   );
  // }

  // ------------------------------------
  // day4
  addToCart(val: Iproduct) {
    // console.log(val);
    // emit => fire event
    this.newPrdInCartEvent.emit(val);
  }
  // ------------------------------------
  // day3
  date1: Date = new Date();
  // date2:string = new Date().toDateString()
  // -------------------------------------
  // day5
  prdDetails(prdId: number) {
    // console.log(prdId);
    this.router.navigate(['/prdDetails', prdId]);
  }
}
