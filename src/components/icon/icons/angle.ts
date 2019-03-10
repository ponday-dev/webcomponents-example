import { svg } from 'lit-element';
import { Props } from '../prop-type';

export const angleUp = (props: Props) =>
svg`<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" viewBox="0 0 24 24" fill="${props.fill}" stroke="${props.stroke}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="arcs">
    <path d="M18 15l-6-6-6 6"/>
</svg>`;

export const angleDown = (props: Props) =>
svg`<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" viewBox="0 0 24 24" fill="${props.fill}" stroke="${props.stroke}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="arcs">
    <path d="M6 9l6 6 6-6"/>
</svg>`;

export const angleLeft = (props: Props) =>
svg`<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" viewBox="0 0 24 24" fill="${props.fill}" stroke="${props.stroke}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="arcs">
    <path d="M15 18l-6-6 6-6"/>
</svg>`

export const angleRight = (props: Props) =>
svg`<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" viewBox="0 0 24 24" fill="${props.fill}" stroke="${props.stroke}" stroke-width="${props.strokeWidth}" stroke-linejoin="arcs">
    <path d="M9 18l6-6-6-6"/>
</svg>`;
