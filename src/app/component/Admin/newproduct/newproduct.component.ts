import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { CategoryWithApiService } from 'src/app/services/category-with-api.service';
import { ProductsListWithApiService } from 'src/app/services/products-list-with-api.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss'],
})
export class NewproductComponent implements OnChanges, OnInit {
  newProduct: Iproduct = {} as Iproduct;
  newCategory: Icategory = {} as Icategory;
  catList: Icategory[] = [];
  prdId: number | null = null;
  constructor(
    private apiProduct: ProductsListWithApiService,
    private router: Router,
    private apiCaegory: CategoryWithApiService,
    private http: HttpClient
  ) {}
  ngOnChanges(): void {}
  ngOnInit(): void {
    this.apiCaegory.getAllCategory().subscribe((data) => {
      this.catList = data;
    });
  }
  text: string = 'Added successfuly';
  addNewPrdStatic() {
    let newProduct: Iproduct = {
      id: 90,
      name: 'new title',
      price: 100,
      quantity: 3,
      prdImgURL:
        'https://media.homecentre.com/i/homecentre/161618330-161618330-HC300719_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      categoryID: 2,
      Material: 'wood',
    };
    this.apiProduct.addNewPrd(newProduct).subscribe({
      next: (x) => {
        console.log(newProduct);
        console.log(x);

        alert(this.text);
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  addNewDinaPrd() {
    this.apiProduct.addNewPrd(this.newProduct).subscribe({
      next: (newProduct) => {
        console.log(newProduct);
        // console.log(this.newProduct);

        alert(this.text);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  formEdit() {
    if (this.prdId) {
      this.apiProduct.editPrd(this.prdId, this.newProduct).subscribe(() => {
        alert('updated');
        this.router.navigate(['/prdListDetails', this.prdId]);
      });
    } else {
      this.http
        .post<Iproduct>(`${environment.BaseApiURL}/products`, this.newProduct)
        .subscribe((res) => {
          const newPrs = res.id;
          this.router.navigate(['/prdListDetails']);
        });
    }
  }
}
