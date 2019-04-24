import { LitElement, html, css, property } from 'lit-element';
import style from './delete.scss';

export class Delete extends LitElement {
    @property({ type: String })
    size: 'normal' | 'small' | 'medium' | 'large' = 'normal';

    static styles = style({ css });

    render() {
        return html`
            <button class="is-${this.size}"></button>
        `;
    }

    static use(name = 'lm-delete') {
        customElements.define(name, Delete);
    }
}
