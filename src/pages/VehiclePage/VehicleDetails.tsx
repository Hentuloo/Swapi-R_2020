import React, { FC } from 'react';
import styled from 'styled-components';
import { LabelWithImage } from 'components/LabelWithImage';
import { SwapiVehicle } from 'types/swapi';
import { RalatedLists } from './RelatedLists';
import { vehicleImageById } from 'assets/images/vehicles';

const Wrapper = styled.div`
    display: grid;
    grid-row-gap: 25px;
    align-content: center;
`;

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
    vehicleId: number | string;
}

export const VehicleDetails: FC<VehicleDetailsProps> = ({
    vehicle,
    vehicleId,
}) => {
    const { name, pilots } = vehicle;
    return (
        <Wrapper>
            <CircledLabel
                title={name}
                mode="CIRCLE"
                src={vehicleImageById[vehicleId]}
            >
                {name}
            </CircledLabel>
            <div>
                <SmallText>Kind: </SmallText>
                <span>{vehicle.vehicle_class}</span>
            </div>
            <RalatedLists pilots={pilots} parentId={vehicleId} />
        </Wrapper>
    );
};
