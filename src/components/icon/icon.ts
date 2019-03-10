import { LitElement, property, css } from 'lit-element';
import { arrowUp, arrowDown, arrowRight, arrowLeft, arrowUpRight, arrowUpLeft, arrowDownLeft, arrowDownRight } from './icons/arrow';
import style from './style.scss';

export type IconTypes =
    'arrow-up'
    | 'arrow-right'
    | 'arrow-down'
    | 'arrow-left'
    | 'arrow-up-right'
    | 'arrow-up-left'
    | 'arrow-down-right'
    | 'arrow-down-left'
    ;

export class Icon extends LitElement {
    static styles = style({ css });

    @property({ type: String })
    type: IconTypes;

    @property({ type: Number })
    size = 24;

    @property({ type: String })
    fill = 'none';

    @property({ type: String })
    stroke = '#353535';
    
    @property({ type: Number, attribute: 'stroke-width' })
    strokeWidth = 3;

    @property({ type: String, attribute: 'stroke-linecap' })
    strokeLinecap: 'butt' | 'round' | 'square' | 'inherit' = 'round';

    render() {
        const renderer = lookup(this.type);
        return renderer(this);
    }

    static use(name = 'lm-icon') {
        customElements.define(name, Icon);
    }
}

function lookup(key: IconTypes) {
    switch(key) {
        case 'arrow-up':
            return arrowUp;
        case 'arrow-down':
            return arrowDown;
        case 'arrow-right':
            return arrowRight;
        case 'arrow-left':
            return arrowLeft;
        case 'arrow-up-left':
            return arrowUpLeft;
        case 'arrow-up-right':
            return arrowUpRight;
        case 'arrow-down-left':
            return arrowDownLeft;
        case 'arrow-down-right':
            return arrowDownRight;
    }
}
