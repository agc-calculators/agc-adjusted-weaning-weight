
import { Component, Prop, State } from '@stencil/core';


@Component({
    tag: 'agc-adjusted-weaning-weight-results'
})
export class AgcAdjustedWeaningWeightResults {
    @Prop() socket: string = ""
    @State() data: any
    @State() ready: boolean = false
    section: HTMLElement;

    render() {
        return (
            <section data-wizard-results ref={c => this.section = c as HTMLElement}>
                <div style={{display: this.ready ? 'none' : 'block'}}>
                    <slot name="empty"></slot>
                </div>

                <div style={{display: this.ready ? 'block' : 'none'}}>
                    {this.data && (<ul class="agc-results">
                            <li>
                                <h2 data-i18n="results.adjusted-weaning-weight">Adjusted 205 Day Weaning Weight</h2>
                                <span class="agc-results__value">{this.data['adjustedWeaningWeight']}</span>
                                <sub>{this.data['units']['weight']}</sub>
                            </li>
                            <li>
                                <h2 data-i18n="results.average-daily-gain">Average Daily Gain (ADG)</h2>
                                <span class="agc-results__value">{this.data['averageDailyGain']}</span>
                                <sub>{this.data['units']['weight']}</sub>
                            </li>                      
                        </ul>)}
                </div>
            </section>
        );
    }

    handleResults(e:CustomEvent) {
        console.log('handle results', e.detail);
        if (e.detail['socket'] !== this.socket) { return; }
        this.data = {...e.detail['results']};
        this.ready = true;
    }

    componentDidLoad() {
        // Global events allow the control to be separated from the form...        
        window.document.addEventListener('agcCalculated', this.handleResults.bind(this));
    }

    componentDidUnload() {
        window.document.removeEventListener('agcCalculated', this.handleResults);
    }
}
