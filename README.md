# Infragistics Grid Element

A reusable Angular Elements custom component that wraps the Infragistics Web Components Data Grid.

## 🚀 Demo

[Live Demo](https://infragistics-poc-ichz.vercel.app)

## 📦 Installation

```bash
npm install @steven-sanchez-altera/infragistics-grid-element
```

## 🎯 Usage

### In HTML (Vanilla JavaScript)

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Include the theme CSS -->
  <link rel="stylesheet" href="node_modules/@steven-sanchez-altera/infragistics-grid-element/dist/themes/material.css">
</head>
<body>
  <!-- Use the custom element -->
  <infragistics-grid-element id="myGrid"></infragistics-grid-element>
  
  <!-- Load the scripts -->
  <script src="node_modules/@steven-sanchez-altera/infragistics-grid-element/dist/browser/polyfills.js"></script>
  <script src="node_modules/@steven-sanchez-altera/infragistics-grid-element/dist/browser/main.js"></script>
  
  <script>
    // Set data programmatically
    const grid = document.getElementById('myGrid');
    grid.data = [
      {
        ProductID: 1,
        ProductName: "Chai",
        UnitPrice: 18.00,
        UnitsInStock: 39,
        OrderDate: new Date("2012-02-12"),
        Discontinued: false
      },
      // ... more data
    ];
  </script>
</body>
</html>
```

### In React

```jsx
import { useEffect, useRef } from 'react';

// Import the custom element (this registers it globally)
import '@steven-sanchez-altera/infragistics-grid-element/dist/browser/main.js';
import '@steven-sanchez-altera/infragistics-grid-element/dist/themes/material.css';

function MyComponent() {
  const gridRef = useRef(null);
  
  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.data = [
        {
          ProductID: 1,
          ProductName: "Chai",
          UnitPrice: 18.00,
          UnitsInStock: 39,
          OrderDate: new Date("2012-02-12"),
          Discontinued: false
        }
      ];
    }
  }, []);

  return (
    <div>
      <infragistics-grid-element ref={gridRef}></infragistics-grid-element>
    </div>
  );
}
```

### In Vue.js

```vue
<template>
  <infragistics-grid-element ref="gridRef"></infragistics-grid-element>
</template>

<script>
import '@steven-sanchez-altera/infragistics-grid-element/dist/browser/main.js';
import '@steven-sanchez-altera/infragistics-grid-element/dist/themes/material.css';

export default {
  name: 'MyComponent',
  mounted() {
    this.$refs.gridRef.data = [
      {
        ProductID: 1,
        ProductName: "Chai",
        UnitPrice: 18.00,
        UnitsInStock: 39,
        OrderDate: new Date("2012-02-12"),
        Discontinued: false
      }
    ];
  }
};
</script>
```

### In Angular

```typescript
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

// Import the custom element
import '@steven-sanchez-altera/infragistics-grid-element/dist/browser/main.js';
import '@steven-sanchez-altera/infragistics-grid-element/dist/themes/material.css';

@Component({
  selector: 'app-my-component',
  template: `
    <infragistics-grid-element #gridRef></infragistics-grid-element>
  `
})
export class MyComponent implements AfterViewInit {
  @ViewChild('gridRef') gridRef!: ElementRef;

  ngAfterViewInit() {
    this.gridRef.nativeElement.data = [
      {
        ProductID: 1,
        ProductName: "Chai",
        UnitPrice: 18.00,
        UnitsInStock: 39,
        OrderDate: new Date("2012-02-12"),
        Discontinued: false
      }
    ];
  }
}
```

## 🔧 API

### Properties

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| `data` | `Array<any>` | Array of data objects to display in the grid | `[]` |

### Data Object Structure

Each data object should contain the following properties:

- `ProductID` (number): Unique product identifier
- `ProductName` (string): Name of the product
- `QuantityPerUnit` (string): Quantity description
- `UnitsInStock` (number): Available stock count
- `UnitPrice` (number): Price per unit
- `OrderDate` (Date): Order date
- `Discontinued` (boolean): Whether the product is discontinued

## 🎨 Theming

The component includes the Infragistics Material theme by default. You can customize the appearance by:

1. Using the included theme: `dist/themes/material.css`
2. Creating your own custom CSS targeting the grid elements
3. Using Infragistics theme variables

## 📋 Requirements

- Modern browser with Web Components support
- The following peer dependencies will be automatically installed:
  - `igniteui-webcomponents`
  - `igniteui-webcomponents-core`
  - `igniteui-webcomponents-data-grids`
  - `igniteui-webcomponents-grids`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Angular Elements](https://angular.io/guide/elements)
- Uses [Infragistics Web Components](https://www.infragistics.com/products/ignite-ui-web-components)
