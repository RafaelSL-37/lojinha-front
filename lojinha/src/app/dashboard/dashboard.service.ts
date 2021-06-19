import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../shared/models/stock-models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseurl = 'https://loja-online-teste.herokuapp.com';
  //auth token: '06df931ae7e6865128ec88d5d26959e2a5b9e636'
  //complete url: 'https://loja-online-teste.herokuapp.com/productslite/'
  constructor(private http: HttpClient) { }

    async getProducts(): Promise<Product[]>{
      return this.http.get<Product[]>(`${this.baseurl}/productslite/`).toPromise();
    }

}
