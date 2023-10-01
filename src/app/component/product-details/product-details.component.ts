import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
// day 5
export class ProductDetailsComponent implements OnInit {
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
    private prdService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit(): void {
    // ways of convert from string to number => number , parseInt , +value
    // this.prdId = this.activatedRoute.snapshot.paramMap.get('pId')
    //   ? Number(this.activatedRoute.snapshot.paramMap.get('pId'))
    //   : 0;
    // console.log(this.prdId);
    // this.product = this.prdService.getPrdById(this.prdId);
    this.productsIdsList = this.prdService.getPrdIdsList();

    // console.log(this.product);
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      // success
      this.prdId = paramMap.get('pId') ? Number(paramMap.get('pId')) : 0;
      let x = this.prdService.getPrdById(this.prdId);
      if (x) {
        this.product = x;
      } else {
        alert('not found product');
        this.location.back();
      }
    });
  }

  perviousProduct() {
    this.currentPrdIndex = this.productsIdsList.indexOf(this.prdId);
    console.log(this.currentPrdIndex);
    this.router.navigate([
      '/prdDetails',
      this.productsIdsList[--this.currentPrdIndex],
    ]);
  }

  nextProduct() {
    this.currentPrdIndex = this.productsIdsList.indexOf(this.prdId);
    console.log(this.currentPrdIndex);
    this.router.navigate([
      '/prdDetails',
      this.productsIdsList[++this.currentPrdIndex],
    ]);
  }
}
