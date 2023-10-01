import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductListService } from 'src/app/services/product-list.service';
import { ProductsListWithApiService } from 'src/app/services/products-list-with-api.service';

@Component({
  selector: 'app-product-list-details',
  templateUrl: './product-list-details.component.html',
  styleUrls: ['./product-list-details.component.scss'],
})
// day5
export class ProductListDetailsComponent implements OnInit {
  // ! => non null assertion operator => 12
  // product!: Iproduct;
  // ? => safe navigation operator
  // product?: Iproduct;

  // product: Iproduct | null = null;
  product: Iproduct | undefined = undefined;
  prdId: number = 0;
  productsIdsList: number[] = [];
  currentPrdIndex: number = 0;
  constructor(
    private prdService: ProductListService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private prdWithApi: ProductsListWithApiService
  ) {}
  ngOnInit(): void {
    // ways of convert from string to number => number , parseInt , +value
    // this.prdId = this.activatedRoute.snapshot.paramMap.get('pId')
    //   ? Number(this.activatedRoute.snapshot.paramMap.get('pId'))
    //   : 0;

    // console.log(this.prdId);
    // this.product = this.prdService.getPrdById(this.prdId);
    // console.log(this.product);
    this.productsIdsList = this.prdService.getPrdIdsList();
    // console.log(this.productsIdsList);
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      // success
      this.prdId = paramMap.get('pId') ? Number(paramMap.get('pId')) : 0;
      // let x = this.prdService.getPrdById(this.prdId);
      // Day6
      this.prdWithApi.getProductById(this.prdId).subscribe((data) => {
        this.product = data;
        console.log(this.product);
      });
      // if (x) {
      //   this.product = x;
      // } else {
      //   alert('not found product');
      //   this.location.back();
      // }
    });
  }
  goBackToPrds() {
    this.router.navigate(['/products']);
  }

  perviousPrd() {
    this.currentPrdIndex = this.productsIdsList.indexOf(this.prdId);
    console.log(this.currentPrdIndex);
    this.router.navigate([
      '/prdListDetails',
      this.productsIdsList[--this.currentPrdIndex],
    ]);
  }
  // arr=[2,4,8]; //arr[1]=4
  nextPrd() {
    this.currentPrdIndex = this.productsIdsList.indexOf(this.prdId);
    console.log(this.currentPrdIndex);
    this.router.navigate([
      '/prdListDetails',
      this.productsIdsList[++this.currentPrdIndex],
    ]);
  }

  // Day6
  prdsAfterSearch: Iproduct[] = [];
  searchWithMaterial(search: any) {
    this.prdWithApi.searchByMaterial(search).subscribe((data) => {
      this.prdsAfterSearch = data;
      console.log(this.prdsAfterSearch);
    });
  }

  editPrd() {
    if (this.product) {
      this.router.navigate(['/admin', this.product.id]);
    }
  }

  deletePrd() {
    if (this.product) {
      this.prdWithApi.deletePrd(this.product.id).subscribe(() => {
        console.log('deleted');
        this.router.navigate(['/main']);
      });
    }
  }
}
