# 🤖 GitHub Copilot Project Prompt

## Project: `@steven-sanchez-altera/infragistics-grid-element`

### Goal

Develop a **reusable Angular 20 web component** wrapping the **Infragistics Web Components Grid**, published as an independent **Angular Element** package for npm.  
The component should work in any framework (Angular, React, Vue.js, or plain HTML).

**✅ PUBLISHED**: This package is now live on npm as `@steven-sanchez-altera/infragistics-grid-element`

---

### 🧩 Technical Stack

- **Framework:** Angular 20
- **Build Tools:** Angular CLI v20, TypeScript 5.8.0
- **Web Components:** `igniteui-webcomponents-core`, `igniteui-webcomponents-data-grids`
- **Wrapper:** `@angular/elements`
- **Demo:** Generated `demo/index.html` served from `dist/`

---

### ✅ Functional Requirements

1. Create `<infragistics-grid-element>` that:
   - Loads `IgcDataGridComponent` from `igniteui-webcomponents-data-grids`
   - Uses proper column types (`igc-text-column`, `igc-numeric-column`, etc.)
   - Accepts `@Input() data` array and optional future props like `columns`, `height`, `width`
   - Provides default Infragistics product sample data (ProductID, ProductName, OrderDate, UnitPrice, etc.)
2. Include Material Design theme styles via `igniteui-webcomponents/themes/light/material.css`
3. Register components using `ModuleManager.register(IgcDataGridModule)`
4. After build, generate demo page via `tools/postbuild.mjs` into `/dist/demo/`
5. Serve demo with:
   ```bash
   npm run build
   npm run serve:dist
   ```
6. Output `<infragistics-grid-element>` should render in plain HTML files.

---

### 🧱 Project Structure

```
infragistics-poc/
 ├─ src/
 │   ├─ app/
 │   │   ├─ components/infragistics-grid/
 │   │   │   ├─ infragistics-grid.component.ts
 │   │   │   ├─ infragistics-grid.component.html
 │   │   │   └─ infragistics-grid.component.scss
 │   │   └─ app.module.ts
 │   ├─ main.ts
 │   ├─ styles.scss
 │   └─ index.html
 ├─ tools/
 │   └─ postbuild.mjs (generates demo page)
 ├─ dist/
 │   ├─ browser/ (Angular build output)
 │   ├─ demo/ (generated demo page)
 │   └─ themes/ (copied CSS themes)
 ├─ infragistics-grid-element.d.ts (TypeScript declarations)
 ├─ .npmignore (npm publishing configuration)
 ├─ vercel.json (Vercel deployment configuration)
 ├─ package.json
 ├─ tsconfig.json
 ├─ angular.json
 └─ README.md
```

---

### 🔧 Current Implementation

The project currently uses:
- **Data Grid Component**: `IgcDataGridComponent` from `igniteui-webcomponents-data-grids`
- **Module Registration**: `ModuleManager.register(IgcDataGridModule)` from `igniteui-webcomponents-core`
- **HTML Template**: `<igc-data-grid>` with `<igc-text-column>`, `<igc-numeric-column>`, and `<igc-date-time-column>`
- **Styling**: Material Design theme from `igniteui-webcomponents/themes/light/material.css`
- **Build Process**: `tools/postbuild.mjs` copies themes and generates demo page
- **Demo Server**: `npm run serve:dist` serves from `dist/` directory on port 4209
- **Sample Data**: Uses Infragistics product dataset with fields: ProductID, ProductName, QuantityPerUnit, UnitsInStock, UnitPrice, OrderDate, Discontinued

---

### 📊 Data Structure Reference

The component uses this data structure for the sample product data:
```typescript
interface ProductData {
  ProductID: number;
  ProductName: string;
  QuantityPerUnit: string;
  UnitsInStock: number;
  UnitPrice: number;
  OrderDate: Date;
  Discontinued: boolean;
  ReorderLevel?: number;
}
```

Column mapping:
- `ProductID` → `<igc-numeric-column>`
- `ProductName`, `QuantityPerUnit` → `<igc-text-column>`
- `UnitsInStock`, `UnitPrice`, `ReorderLevel` → `<igc-numeric-column>`
- `OrderDate` → `<igc-date-time-column>`
- `Discontinued` → `<igc-text-column>` (displays boolean as text)

---

### 🧠 Copilot Behavior Instructions

- When writing new code:
  - Use **Angular 20 syntax** (ES2022 targets)
  - Keep the component **framework-agnostic**
  - Import from `igniteui-webcomponents-core` and `igniteui-webcomponents-data-grids`
  - Register modules using `ModuleManager.register(IgcDataGridModule)`
  - Use `<igc-data-grid>` with proper column types (`<igc-text-column>`, `<igc-numeric-column>`, `<igc-date-time-column>`)
  - Provide **typed @Input()** properties and **default data**
  - Add `CUSTOM_ELEMENTS_SCHEMA` to NgModule for web components
  - Avoid auto-bootstrapping any Angular component (`bootstrap: []`)
- When updating code:
  - Preserve naming: `InfragisticsGridComponent` and `infragistics-grid-element`
  - Ensure build scripts (`npm run build` + `npm run serve:dist`) stay functional
- When documenting:
  - Generate concise inline comments and JSDoc for classes and properties
  - Include usage examples showing HTML `<infragistics-grid-element>`

---

### 📦 npm Package Details

**Package Name**: `@steven-sanchez-altera/infragistics-grid-element`  
**Current Version**: `1.0.0`  
**Package Size**: 690.2 kB  
**Includes**:
- `dist/browser/` - Compiled Angular Elements bundle
- `dist/themes/` - Infragistics Material theme CSS
- `infragistics-grid-element.d.ts` - TypeScript declarations
- `README.md` - Complete usage documentation

**Usage in Projects**:
```html
<!-- HTML -->
<script src="node_modules/@steven-sanchez-altera/infragistics-grid-element/dist/browser/main.js"></script>
<link rel="stylesheet" href="node_modules/@steven-sanchez-altera/infragistics-grid-element/dist/themes/material.css">
<infragistics-grid-element id="grid"></infragistics-grid-element>
```

```javascript
// React/Vue/Angular
import '@steven-sanchez-altera/infragistics-grid-element/dist/browser/main.js';
import '@steven-sanchez-altera/infragistics-grid-element/dist/themes/material.css';
```

### 🧰 Example Tasks for Copilot

> You can type these directly into VS Code to guide Copilot:

- "Create a new Angular Element component named `<infragistics-calendar-element>` using the same pattern as `InfragisticsGridComponent`."
- "Add auto-generate-columns, sorting, and filtering properties to the existing data grid component."
- "Generate TypeScript interfaces for `GridColumn` and `GridData`."
- "Update the postbuild script to include additional theme variants (dark, bootstrap, indigo)."
- "Add proper data binding using `dataSource` property in `ngAfterViewInit`."
- "Configure column types (`igc-date-time-column` for OrderDate, currency formatting for UnitPrice, boolean display for Discontinued)."
- "Add column sorting and filtering capabilities to the product data grid."
- "Implement custom cell templates for boolean values (Discontinued column) with icons or badges."
- "Update package version and publish new features to npm."
- "Add more input properties like height, width, auto-generate-columns to the component."

---

### 🚀 Publishing & Deployment

**✅ PUBLISHED TO NPM**: `@steven-sanchez-altera/infragistics-grid-element@1.0.0`

**Development Workflow:**
1. Build and verify demo
   ```bash
   npm run build
   npm run serve:dist
   ```
2. Test locally at `http://127.0.0.1:4209/demo/`

**Deployment:**
- **Live Demo**: https://infragistics-poc-ichz.vercel.app
- **npm Package**: https://www.npmjs.com/package/@steven-sanchez-altera/infragistics-grid-element
- **Vercel**: Auto-deploys from main branch, configured with `vercel.json`

**Updating the Package:**
```bash
npm version patch|minor|major  # Updates version
npm publish                    # Publishes to npm (prepublishOnly runs build)
```

**Installation for Users:**
```bash
npm install @steven-sanchez-altera/infragistics-grid-element
```

---

### 💡 Reminder

Copilot should always:

- Suggest Angular-20-compatible imports
- Maintain modularity for reuse across projects
- Keep generated code strictly typed and production-ready
- Use ES Modules syntax (`import … from`)

---

**End of Copilot Prompt**
