import React, { FC, Suspense } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSingleSwapiItem } from 'hooks/useSingleSwapiItem';
import { VehicleDetails } from './VehicleDetails';
import { LoadingSpiner } from 'components/LoadingSpiner';

const Wrapper = styled.div`
    width: 90%;
    max-width: 800px;
    display: grid;
    grid-row-gap: 25px;
    align-content: center;
    margin: 0px auto;
    text-align: center;
    font-weight: ${({ theme }) => theme.fw[1]};
    font-size: ${({ theme }) => theme.fs.m};

    ${({ theme }) => theme.mediaQuery.md} {
        font-size: ${({ theme }) => theme.fs.m};
    }
    ${({ theme }) => theme.mediaQuery.lg} {
        padding-right: 300px;
    }
`;
export interface VehicleProps {}

export const Vehicle: FC<VehicleProps> = () => {
    const { id } = useParams();
    const {
        vehicle: { data },
    } = useSingleSwapiItem({ vehicleId: Number(id) });

    if (!data) return null;
    return (
        <Wrapper>
            <Suspense fallback={<LoadingSpiner />}>
                <VehicleDetails vehicle={data} />{' '}
            </Suspense>
        </Wrapper>
    );
};
