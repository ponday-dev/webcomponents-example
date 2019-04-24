import { LitElement, html, css, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';
import style from './button.scss';
import { Colors } from '~/theme';

export class Button extends LitElement {

    @property({ type: Boolean, reflect: true })
    outlined = false;

    @property({ type: String })
    color?: Colors;

    @property({ type: Boolean })
    disabled = false;

    static styles = style({ css });

    render() {
        const classes = {
            outlined: this.outlined || !this.color,
            color: !!this.color,
            [`color-${this.color}`]: this.color
        };
        return html`
            <button class=${classMap(classes)} disabled=${ifDefined(this.disabled || undefined)}>
                <slot></slot>
            </button>        `
    }

    static use(name = 'lm-button') {
        customElements.define(name, Button);
    }

}
