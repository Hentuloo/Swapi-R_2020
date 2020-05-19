import React, { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from 'Layouts/MainLayout';

const Wrapper = styled.div``;

export interface VehiclesProps {}

export const Vehicles: FC<VehiclesProps> = ({ ...props }) => {
    return (
        <MainLayout>
            <Wrapper {...props}>Vehicles</Wrapper>
        </MainLayout>
    );
};
