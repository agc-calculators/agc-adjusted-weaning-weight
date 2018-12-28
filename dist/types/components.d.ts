/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface AgcAdjustedWeaningWeightProgress {
    'socket': string;
  }
  interface AgcAdjustedWeaningWeightProgressAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcAdjustedWeaningWeightResultsPlaceholder {}
  interface AgcAdjustedWeaningWeightResultsPlaceholderAttributes extends StencilHTMLAttributes {}

  interface AgcAdjustedWeaningWeightResults {
    'socket': string;
  }
  interface AgcAdjustedWeaningWeightResultsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcAdjustedWeaningWeight {
    'mode': 'full' | 'step';
    'socket': string;
    'tract': string;
    'units': any;
  }
  interface AgcAdjustedWeaningWeightAttributes extends StencilHTMLAttributes {
    'mode'?: 'full' | 'step';
    'onAgcCalculated'?: (event: CustomEvent) => void;
    'onAgcStepChanged'?: (event: CustomEvent) => void;
    'socket'?: string;
    'tract'?: string;
    'units'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AgcAdjustedWeaningWeightProgress': Components.AgcAdjustedWeaningWeightProgress;
    'AgcAdjustedWeaningWeightResultsPlaceholder': Components.AgcAdjustedWeaningWeightResultsPlaceholder;
    'AgcAdjustedWeaningWeightResults': Components.AgcAdjustedWeaningWeightResults;
    'AgcAdjustedWeaningWeight': Components.AgcAdjustedWeaningWeight;
  }

  interface StencilIntrinsicElements {
    'agc-adjusted-weaning-weight-progress': Components.AgcAdjustedWeaningWeightProgressAttributes;
    'agc-adjusted-weaning-weight-results-placeholder': Components.AgcAdjustedWeaningWeightResultsPlaceholderAttributes;
    'agc-adjusted-weaning-weight-results': Components.AgcAdjustedWeaningWeightResultsAttributes;
    'agc-adjusted-weaning-weight': Components.AgcAdjustedWeaningWeightAttributes;
  }


  interface HTMLAgcAdjustedWeaningWeightProgressElement extends Components.AgcAdjustedWeaningWeightProgress, HTMLStencilElement {}
  var HTMLAgcAdjustedWeaningWeightProgressElement: {
    prototype: HTMLAgcAdjustedWeaningWeightProgressElement;
    new (): HTMLAgcAdjustedWeaningWeightProgressElement;
  };

  interface HTMLAgcAdjustedWeaningWeightResultsPlaceholderElement extends Components.AgcAdjustedWeaningWeightResultsPlaceholder, HTMLStencilElement {}
  var HTMLAgcAdjustedWeaningWeightResultsPlaceholderElement: {
    prototype: HTMLAgcAdjustedWeaningWeightResultsPlaceholderElement;
    new (): HTMLAgcAdjustedWeaningWeightResultsPlaceholderElement;
  };

  interface HTMLAgcAdjustedWeaningWeightResultsElement extends Components.AgcAdjustedWeaningWeightResults, HTMLStencilElement {}
  var HTMLAgcAdjustedWeaningWeightResultsElement: {
    prototype: HTMLAgcAdjustedWeaningWeightResultsElement;
    new (): HTMLAgcAdjustedWeaningWeightResultsElement;
  };

  interface HTMLAgcAdjustedWeaningWeightElement extends Components.AgcAdjustedWeaningWeight, HTMLStencilElement {}
  var HTMLAgcAdjustedWeaningWeightElement: {
    prototype: HTMLAgcAdjustedWeaningWeightElement;
    new (): HTMLAgcAdjustedWeaningWeightElement;
  };

  interface HTMLElementTagNameMap {
    'agc-adjusted-weaning-weight-progress': HTMLAgcAdjustedWeaningWeightProgressElement
    'agc-adjusted-weaning-weight-results-placeholder': HTMLAgcAdjustedWeaningWeightResultsPlaceholderElement
    'agc-adjusted-weaning-weight-results': HTMLAgcAdjustedWeaningWeightResultsElement
    'agc-adjusted-weaning-weight': HTMLAgcAdjustedWeaningWeightElement
  }

  interface ElementTagNameMap {
    'agc-adjusted-weaning-weight-progress': HTMLAgcAdjustedWeaningWeightProgressElement;
    'agc-adjusted-weaning-weight-results-placeholder': HTMLAgcAdjustedWeaningWeightResultsPlaceholderElement;
    'agc-adjusted-weaning-weight-results': HTMLAgcAdjustedWeaningWeightResultsElement;
    'agc-adjusted-weaning-weight': HTMLAgcAdjustedWeaningWeightElement;
  }


}
