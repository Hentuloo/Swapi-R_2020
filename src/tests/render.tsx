// test-utils.js
import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import theme from 'themes/mainTheme';
import { BrowserRouter as Router } from 'react-router-dom';

const render = (
    ui: React.ReactElement,
    { ...renderOptions }: Omit<RenderOptions, 'queries'> = {},
) => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>{children} </Router>,
        </ThemeProvider>
    );

    return rtlRender(ui, {
        wrapper: Wrapper as React.FunctionComponent,
        ...renderOptions,
    });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
