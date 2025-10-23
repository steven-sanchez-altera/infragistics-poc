declare global {
  namespace JSX {
    interface IntrinsicElements {
      'infragistics-grid-element': InfragisticsGridElementProps;
    }
  }
}

export interface GridData {
  ProductID?: number;
  ProductName?: string;
  QuantityPerUnit?: string;
  UnitsInStock?: number;
  UnitPrice?: number;
  OrderDate?: Date;
  Discontinued?: boolean;
  ReorderLevel?: number;
  [key: string]: any;
}

export interface GridColumn {
  field: string;
  headerText: string;
  type: 'text' | 'numeric' | 'datetime' | 'boolean';
  width?: string;
}

export interface InfragisticsGridElementProps {
  data?: GridData[];
  [key: string]: any;
}

// Common utilities
export declare function registerInfragisticsModules(): void;
export declare const defaultGridData: GridData[];

export {};