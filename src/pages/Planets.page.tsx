import React, { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from 'Layouts/MainLayout';

const Wrapper = styled.div``;

export interface PlanetsProps {}

export const Planets: FC<PlanetsProps> = ({ ...props }) => {
    return (
        <MainLayout>
            <Wrapper {...props}>Planets</Wrapper>
        </MainLayout>
    );
};
