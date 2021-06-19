import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/shared/models/stock-models';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input()
  product = new Product();

  constructor() { }

  ngOnInit(): void {
  }

  /*get variation(): string{
    const localizedVariationString = this.product.toLocaleString();
    cosnt prefix = this.product.variation > 0 ? '+' : '-';
    return `${prefix} ${localizedVariationString.replace('-', '')}`
  }*/
}
