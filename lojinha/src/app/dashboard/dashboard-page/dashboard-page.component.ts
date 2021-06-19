import { Component, OnInit } from '@angular/core';
import Product from 'src/app/shared/models/stock-models';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  products: Product[] = [];

  constructor(private dbService: DashboardService) { }

  ngOnInit(): void { 
    this.fetchProducts();
   }

  async fetchProducts(): Promise<void>{
    this.products = await this.dbService.getProducts();
    console.log('aaaaaaaaaaa')
    console.log(this.products)
  }

}
