import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcDataGridModule, IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';

// Register the data grid module
ModuleManager.register(IgcDataGridModule);

@Component({
  selector: 'app-infragistics-grid',
  templateUrl: './infragistics-grid.component.html',
  styleUrls: ['./infragistics-grid.component.scss'],
  standalone: false
})
export class InfragisticsGridComponent implements OnInit, AfterViewInit {
  @Input() data: any[] = [];

  ngOnInit(): void {
    if (!this.data || this.data.length === 0) {
      this.data = [{
        Discontinued: false,
        OrderDate: new Date("2012-02-12"),
        ProductID: 1,
        ProductName: "Chai",
        QuantityPerUnit: "10 boxes x 20 bags",
        ReorderLevel: 10,
        UnitPrice: 18.0000,
        UnitsInStock: 39
      }, {
        Discontinued: false,
        OrderDate: new Date("2003-03-17"),
        ProductID: 2,
        ProductName: "Chang",
        QuantityPerUnit: "24 - 12 oz bottles",
        ReorderLevel: 25,
        UnitPrice: 19.0000,
        UnitsInStock: 17
      }, {
        Discontinued: false,
        OrderDate: new Date("2006-03-17"),
        ProductID: 3,
        ProductName: "Aniseed Syrup",
        QuantityPerUnit: "12 - 550 ml bottles",
        ReorderLevel: 25,
        UnitPrice: 10.0000,
        UnitsInStock: 13
      }, {
        Discontinued: false,
        OrderDate: new Date("2016-03-17"),
        ProductID: 4,
        ProductName: "Chef Antony Cajun Seasoning",
        QuantityPerUnit: "48 - 6 oz jars",
        ReorderLevel: 0,
        UnitPrice: 22.0000,
        UnitsInStock: 53
      }, {
        Discontinued: true,
        OrderDate: new Date("2011-11-11"),
        ProductID: 5,
        ProductName: "Chef Antony Gumbo Mix",
        QuantityPerUnit: "36 boxes",
        ReorderLevel: 0,
        UnitPrice: 21.3500,
        UnitsInStock: 0
      }];
    }
  }

  ngAfterViewInit(): void {
    const grid = document.querySelector('#infragistics-data-grid') as IgcDataGridComponent;
    if (grid) {
      grid.dataSource = this.data;
    }
  }
}