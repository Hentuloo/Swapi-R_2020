const theme = {
    color: {
        brand: ['#F4D327'],
        white: ['rgb(255, 255, 255)', 'rgba(225, 225, 225, 1)'],
        black: ['#000', '#2B2B2B', '#323232'],
        gray: ['#4A4A4A'],
    },
    mediaQuery: {
        xs: '@media (min-width: 0px)',
        sm: '@media (min-width: 480px)',
        md: '@media (min-width: 768px)',
        lg: '@media (min-width: 1024px)',
        vlg: '@media (min-width: 1494px)',
        mobileKeyboard: ` @media screen and (min-device-aspect-ratio: 1/1) and (min-aspect-ratio: 1/1) and (max-width: 768px)`,
        mobileLandscape:
            '@media (max-width: 768px) and (orientation: landscape)',
    },
    fs: {
        mini: '0.5em',
        xxxs: '0.7em',
        xxs: '0.9em',
        xs: '1.1em',
        s: '1.3em',
        m: '1.5em',
        l: '1.6em',
        xl: '1.8em',
        xxl: '2em',
        xxxl: '2.3em',
        large: '2.8em',
    },
    fw: [400, 800],
    ff: [`'Open Sans', sans-serif`],
};

export default theme;
