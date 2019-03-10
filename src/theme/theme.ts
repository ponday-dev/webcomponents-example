import { Colors, defaults } from './colors';

type ColorScheme = { [K in Colors]: string };

export interface Theme {
    colors: ColorScheme;
}

export function buildTheme(config: Theme): Theme {
    return {
        colors: formatColors(config.colors)
    }
}

function formatColors(scheme: ColorScheme): ColorScheme {
    return Object.entries(scheme).reduce((prev, [key, color]) => {
        return { ...prev, [key]: `var(--color-${key}, ${color})`}
    }, {} as ColorScheme);
}

export const theme = buildTheme({
    colors: defaults
});

