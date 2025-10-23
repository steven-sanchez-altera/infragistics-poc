import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';
import { registerInfragisticsModules, defaultGridData, GridData } from '../../infragistics-common';

// Register the data grid module
registerInfragisticsModules();

@Component({
  selector: 'app-infragistics-grid',
  templateUrl: './infragistics-grid.component.html',
  styleUrls: ['./infragistics-grid.component.scss'],
  standalone: false
})
export class InfragisticsGridComponent implements OnInit, AfterViewInit {
  @Input() data: GridData[] = [];

  ngOnInit(): void {
    if (!this.data || this.data.length === 0) {
      this.data = defaultGridData;
    }
  }

  ngAfterViewInit(): void {
    const grid = document.querySelector('#infragistics-data-grid') as IgcDataGridComponent;
    if (grid) {
      grid.dataSource = this.data;
    }
  }
}