import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Audi', model: 'R8', price: 32000 },
    { make: 'BMW', model: 'X6', price: 72000 },
    { make: 'KIA', model: 'ken', price: 35000 },
    { make: 'Suzuki', model: 'Swift', price: 32000 },
    { make: 'Benz', model: 'c-class', price: 72000 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
