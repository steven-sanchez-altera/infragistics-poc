import { mkdirSync, writeFileSync, copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const distDir = 'dist';
const demoDir = join(distDir, 'demo');
const themesDir = join(distDir, 'themes');
mkdirSync(demoDir, { recursive: true });
mkdirSync(themesDir, { recursive: true });

// Copy theme CSS files
copyFileSync(
  'node_modules/igniteui-webcomponents/themes/light/material.css',
  join(themesDir, 'material.css')
);

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Infragistics Grid Element — Demo</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      body { margin: 0; padding: 24px; font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }
      h1 { font-size: 20px; margin-bottom: 12px; }
      .card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; }
      .grid-wrap { height: 440px; }
    </style>
    <link rel="stylesheet" href="../browser/styles.css">
    <!-- Infragistics WebComponents Themes -->
    <link rel="stylesheet" href="../themes/material.css">
  </head>
  <body>
    <h1>Infragistics Grid Custom Element — Demo</h1>
    <div class="card grid-wrap">
      <infragistics-grid-element id="demoGrid"></infragistics-grid-element>
    </div>
    <script type="module" src="../browser/polyfills.js"></script>
    <script type="module" src="../browser/main.js"></script>
    <script type="module">
      const el = document.getElementById('demoGrid');
      el.data = [{
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
    </script>
  </body>
</html>`;

writeFileSync(join(demoDir, 'index.html'), html, 'utf-8');
console.log('✔ Demo page written to dist/demo/index.html');

// Create infragistics-common.js file manually
const commonJs = `// Infragistics Common Module
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcDataGridModule } from 'igniteui-webcomponents-data-grids';

// Register the Infragistics modules
export function registerInfragisticsModules() {
  ModuleManager.register(IgcDataGridModule);
}

// Default sample data
export const defaultGridData = [
  {
    Discontinued: false,
    OrderDate: new Date("2012-02-12"),
    ProductID: 1,
    ProductName: "Chai",
    QuantityPerUnit: "10 boxes x 20 bags",
    ReorderLevel: 10,
    UnitPrice: 18.0000,
    UnitsInStock: 39
  },
  {
    Discontinued: false,
    OrderDate: new Date("2003-03-17"),
    ProductID: 2,
    ProductName: "Chang",
    QuantityPerUnit: "24 - 12 oz bottles",
    ReorderLevel: 25,
    UnitPrice: 19.0000,
    UnitsInStock: 17
  },
  {
    Discontinued: false,
    OrderDate: new Date("2006-03-17"),
    ProductID: 3,
    ProductName: "Aniseed Syrup",
    QuantityPerUnit: "12 - 550 ml bottles",
    ReorderLevel: 25,
    UnitPrice: 10.0000,
    UnitsInStock: 13
  },
  {
    Discontinued: false,
    OrderDate: new Date("2016-03-17"),
    ProductID: 4,
    ProductName: "Chef Antony Cajun Seasoning",
    QuantityPerUnit: "48 - 6 oz jars",
    ReorderLevel: 0,
    UnitPrice: 22.0000,
    UnitsInStock: 53
  },
  {
    Discontinued: true,
    OrderDate: new Date("2011-11-11"),
    ProductID: 5,
    ProductName: "Chef Antony Gumbo Mix",
    QuantityPerUnit: "36 boxes",
    ReorderLevel: 0,
    UnitPrice: 21.3500,
    UnitsInStock: 0
  }
];

// Auto-register when imported
registerInfragisticsModules();
`;

writeFileSync(join(distDir, 'infragistics-common.js'), commonJs, 'utf-8');
console.log('✔ infragistics-common.js created');

console.log('\n📦 Package structure:');
console.log('├─ dist/browser/main.js        (Angular Elements bundle)');
console.log('├─ dist/browser/polyfills.js   (Angular polyfills)');
console.log('├─ dist/browser/styles.css     (Component styles)');
console.log('├─ dist/themes/material.css    (Infragistics theme)');
console.log('├─ dist/infragistics-common.js (Common utilities & data)');
console.log('├─ dist/demo/index.html        (Demo page)');
console.log('└─ Ready for npm publish! 🚀\n');
console.log('🧪 Now users can import:');
console.log('   • main.js (full Angular Elements bundle)');
console.log('   • infragistics-common.js (just utilities & sample data)');