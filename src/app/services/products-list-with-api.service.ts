import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsListWithApiService {
  // inject
  http = {};
  constructor(private httpClient: HttpClient) {
    this.http = {
      Headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  getAllProducts(): Observable<Iproduct[]> {
    // return this.httpClient.get<Iproduct[]>('http://localhost:3000/products');
    return this.httpClient.get<Iproduct[]>(
      `${environment.BaseApiURL}/products`
    );
  }

  getProductById(prdId: number): Observable<Iproduct> {
    // return this.httpClient.get<Iproduct>(
    //   'http://localhost:3000/products' + '/' + prdId
    // );
    return this.httpClient.get<Iproduct>(
      `${environment.BaseApiURL}/products/${prdId}`
    );
  }

  getProductByCatId(catId: number): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.BaseApiURL}/products?categoryID=${catId}`
    );
  }

  addNewPrd(newPrd: Iproduct): Observable<Iproduct> {
    // console.log(newPrd);
    return this.httpClient.post<Iproduct>(
      `${environment.BaseApiURL}/products`,
      newPrd
    );
  }

  editPrd(prdId: number, updatePrd: Iproduct): Observable<Iproduct> {
    const editLink = `${environment.BaseApiURL}/products/${prdId}`;
    return this.httpClient.put<Iproduct>(editLink, updatePrd);
  }

  deletePrd(prdId: number): Observable<void> {
    const deleteLink = `${environment.BaseApiURL}/products/${prdId}`;
    return this.httpClient.delete<void>(deleteLink);
  }

  // addNewProduct(newProduct: Iproduct): Observable<Iproduct> {
  //   return this.httpClient.post<Iproduct>(
  //     `${environment.BaseApiURL}/products/`,
  //     JSON.stringify(newProduct),
  //     this.http
  //   );
  // }

  searchByMaterial(mat: string): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.BaseApiURL}/products?Material=${mat}`
    );
  }
}
