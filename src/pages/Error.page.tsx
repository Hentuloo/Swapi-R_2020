import React, { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from 'Layouts/MainLayout';

const Wrapper = styled.div``;

export interface ErrorProps {}

export const Error: FC<ErrorProps> = ({ ...props }) => {
    return (
        <MainLayout>
            <Wrapper {...props}>Something gone wrong</Wrapper>
        </MainLayout>
    );
};
