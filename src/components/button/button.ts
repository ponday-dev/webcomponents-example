import { LitElement, html, css, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import staticStyle from './style.scss';
import { Colors } from '~/theme';

export class Button extends LitElement {

    @property({ type: Boolean, reflect: true })
    outlined = false;

    @property({ type: String })
    color?: Colors;

    static styles = staticStyle({ css });

    render() {
        const classes = {
            outlined: this.outlined || !this.color,
            color: !!this.color,
            [`color-${this.color}`]: this.color
        };
        return html`
            <button class=${classMap(classes)}>
                <slot></slot>
            </button>
        `
    }

    static use(name = 'lm-button') {
        customElements.define(name, Button);
    }

}
