import React, { FC } from 'react';
import styled from 'styled-components';
import { MemoizedNavigation } from 'components/Navigation';

const Wrapper = styled.div`
    display: grid;
    min-height: 100vh;
    ${({ theme }) => theme.mediaQuery.md} {
        grid-template-columns: 300px 1fr;
    }
`;

export interface MainLayoutProps {}

export const MainLayout: FC<MainLayoutProps> = ({ children, ...props }) => {
    return (
        <Wrapper {...props}>
            <MemoizedNavigation />
            <div></div>
            <div>{children}</div>
        </Wrapper>
    );
};
