import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategory } from '../Models/icategory';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryWithApiService {
  // inject
  constructor(private httpClient: HttpClient) {}

  getAllCategory(): Observable<Icategory[]> {
    return this.httpClient.get<Icategory[]>(
      `${environment.BaseApiURL}/products`
    );
  }

  getCategoryById(catId: number): Observable<Icategory> {
    return this.httpClient.get<Icategory>(
      `${environment.BaseApiURL}/products/${catId}`
    );
  }

  // searchByMaterial(mat: string): Observable<Icategory[]> {
  //   return this.httpClient.get<Icategory[]>(
  //     `${environment.BaseApiURL}/products?Material=${mat}`
  //   );
  // }
}
