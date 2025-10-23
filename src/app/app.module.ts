import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { InfragisticsGridComponent } from './components/infragistics-grid/infragistics-grid.component';

@NgModule({
  declarations: [InfragisticsGridComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(InfragisticsGridComponent, { injector: this.injector });
    if (!customElements.get('infragistics-grid-element')) {
      customElements.define('infragistics-grid-element', element);
    }
  }

  ngDoBootstrap() {}
}