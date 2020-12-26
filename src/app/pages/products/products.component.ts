import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  page = 1;

  getPageSymbol(current: number) {
    return ['/home', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

}
