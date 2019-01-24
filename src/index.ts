import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    name: string = '';

    render() {
        return html`<div>Hello, ${this.name}</div>`;
    }
}
