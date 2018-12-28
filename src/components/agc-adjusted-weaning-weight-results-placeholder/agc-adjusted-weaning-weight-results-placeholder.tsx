
import { Component } from '@stencil/core';


@Component({
    tag: 'agc-adjusted-weaning-weight-results-placeholder'
})
export class AgcAdjustedWeaningWeightResultsPlaceholder {

    

    render() {
        const placeholder = () => <span><i class="mark"></i> <i class="mark"></i> <i class="mark"></i> <i class="mark"></i></span>

        return (
            <section>
                <ul class="agc-results-placeholder">
                    <li>
                        <h2 data-i18n="results.adjusted-weaning-weight">Adjusted 205 Day Weaning Weight</h2>
                        {placeholder()}
                    </li>
                    <li>
                        <h2 data-i18n="results.average-daily-gain">Average Daily Gain (ADG)</h2>
                        {placeholder()}
                    </li>                                      
                </ul>
            </section>
        );
    }
}