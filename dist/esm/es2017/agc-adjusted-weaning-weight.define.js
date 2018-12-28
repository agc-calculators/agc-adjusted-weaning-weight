
// AgcAdjustedWeaningWeight: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './agc-adjusted-weaning-weight.core.js';
import {
  AgcAdjustedWeaningWeight,
  AgcAdjustedWeaningWeightProgress,
  AgcAdjustedWeaningWeightResults,
  AgcAdjustedWeaningWeightResultsPlaceholder
} from './agc-adjusted-weaning-weight.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcAdjustedWeaningWeight,
    AgcAdjustedWeaningWeightProgress,
    AgcAdjustedWeaningWeightResults,
    AgcAdjustedWeaningWeightResultsPlaceholder
  ], opts);
}
