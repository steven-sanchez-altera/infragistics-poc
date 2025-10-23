// Entry point for infragistics-common functionality
export { 
  registerInfragisticsModules, 
  defaultGridData, 
  GridData, 
  GridColumn 
} from './app/infragistics-common';

// Auto-register modules when this file is imported
import { registerInfragisticsModules } from './app/infragistics-common';
registerInfragisticsModules();