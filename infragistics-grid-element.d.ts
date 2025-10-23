declare global {
  namespace JSX {
    interface IntrinsicElements {
      'infragistics-grid-element': InfragisticsGridElementProps;
    }
  }
}

export interface InfragisticsGridElementProps {
  data?: Array<{
    ProductID?: number;
    ProductName?: string;
    QuantityPerUnit?: string;
    UnitsInStock?: number;
    UnitPrice?: number;
    OrderDate?: Date;
    Discontinued?: boolean;
    [key: string]: any;
  }>;
  [key: string]: any;
}

export {};