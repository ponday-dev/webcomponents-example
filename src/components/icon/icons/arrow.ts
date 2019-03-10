import { svg } from 'lit-element';
import { Props } from '../prop-type';

export const arrowUp = (props: Props) => 
svg`<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" viewBox="0 0 24 24" fill="${props.fill}" stroke="${props.stroke}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="arcs">
    <path d="M12 19V6M5 12l7-7 7 7"/>
</svg>`;

export const arrowDown = (props: Props) =>
svg`<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" viewBox="0 0 24 24" fill="${props.fill}" stroke="${props.stroke}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="arcs">
    <path d="M12 5v13M5 12l7 7 7-7"/>
</svg>`;

export const arrowLeft = (props: Props) =>
svg`<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" viewBox="0 0 24 24" fill="${props.fill}" stroke="${props.stroke}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="arcs">
    <path d="M19 12H6M12 5l-7 7 7 7"/>
</svg>`;

export const arrowRight = (props: Props) =>
svg`<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" viewBox="0 0 24 24" fill="${props.fill}" stroke="${props.stroke}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="arcs">
    <path d="M5 12h13M12 5l7 7-7 7"/>
</svg>`;

export const arrowUpLeft = (props: Props) =>
svg`<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" viewBox="0 0 24 24" fill="${props.fill}" stroke="${props.stroke}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="arcs">
    <path d="M17 17L7.8 7.7M7 17V7h10"/>
</svg>`;

export const arrowUpRight = (props: Props) =>
svg`<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" viewBox="0 0 24 24" fill="${props.fill}" stroke="${props.stroke}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="arcs">
    <path d="M7 17l9.2-9.2M17 17V7H7"/>
</svg>`;

export const arrowDownLeft = (props: Props) =>
svg`<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" viewBox="0 0 24 24" fill="${props.fill}" stroke="${props.stroke}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="arcs">
    <path d="M17 7l-9.2 9.2M7 7v10h10"/>
</svg>`;

export const arrowDownRight = (props: Props) =>
svg`<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" viewBox="0 0 24 24" fill="${props.fill}" stroke="${props.stroke}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="arcs">
    <path d="M7 7l9.2 9.2M17 7v10H7"/>
</svg>`;
