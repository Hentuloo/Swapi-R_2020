import React, { FC } from 'react';
import styled from 'styled-components';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { useSingleSwapiItem } from 'hooks/useSingleSwapiItem';
import { VehicleDetails } from './VehicleDetails';
import { ClearButton } from 'components/ClearButton';

const Wrapper = styled.div`
    width: 90%;
    min-height: 90vh;
    max-width: 1000px;
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
    const { goBack } = useHistory();
    const { id } = useParams();
    const {
        vehicle: { data },
    } = useSingleSwapiItem({ vehicleId: Number(id) });

    if (!Number(id) || (data && data.detail)) return <Redirect to="/404" />;
    if (!data) return null;

    return (
        <Wrapper>
            <VehicleDetails vehicle={data} vehicleId={id} />
            <ClearButton onClick={goBack}>Go back</ClearButton>
        </Wrapper>
    );
};
