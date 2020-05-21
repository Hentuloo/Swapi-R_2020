import React, { FC } from 'react';
import styled from 'styled-components';
import { MemoizedNavigation } from 'components/Navigation';
import { BackgroundImage } from 'components/BackgroundImage';

const Wrapper = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: 0px 1fr;
    ${({ theme }) => theme.mediaQuery.md} {
        grid-template-columns: 240px 1fr;
    }
`;

export interface MainLayoutProps {}

export const MainLayout: FC<MainLayoutProps> = ({ children, ...props }) => {
    return (
        <Wrapper {...props}>
            <MemoizedNavigation />
            <div></div>
            <div>{children}</div>
            <BackgroundImage />
        </Wrapper>
    );
};
