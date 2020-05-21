import React, { FC } from 'react';
import styled from 'styled-components';
import { queryKeys } from 'config/Constants';
import { LabelWithImage } from 'components/LabelWithImage';
import { SwapiSubItemsList } from 'components/Lists/SwapiSubItemsList';
import { SwapiVehicle } from 'types/swapi';

const CircledLabel = styled(LabelWithImage)`
    width: 100%;
    max-width: 300px;
    margin: 0px auto;
    font-size: inherit;
    ${({ theme }) => theme.mediaQuery.md} {
        max-width: 370px;
    }
    ${({ theme }) => theme.mediaQuery.vlg} {
        max-width: 400px;
    }
`;
const SmallText = styled.span`
    font-weight: ${({ theme }) => theme.fw[0]};
    font-size: ${({ theme }) => theme.fs.xxs};
`;
export interface VehicleDetailsProps {
    vehicle: SwapiVehicle;
}

export const VehicleDetails: FC<VehicleDetailsProps> = ({ vehicle }) => {
    const { name, pilots } = vehicle;
    return (
        <>
            <CircledLabel title={name} mode="CIRCLE">
                {name}
            </CircledLabel>
            <div>
                <SmallText>Kind: </SmallText>
                <span>{vehicle.vehicle_class}</span>
            </div>
            <SwapiSubItemsList
                items={pilots}
                key="unique"
                queryKey={(id) => queryKeys.single.character(id)}
                to={(id) => `/characters/${id}`}
            />
        </>
    );
};
