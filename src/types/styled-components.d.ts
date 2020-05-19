import theme from 'themes/mainTheme';

type ThemeInterface = typeof theme;

declare module 'styled-components' {
    // eslint-disable-next-line
    interface DefaultTheme extends ThemeInterface {}
}
