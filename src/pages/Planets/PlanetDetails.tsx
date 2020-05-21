import React, { FC } from 'react';
import styled from 'styled-components';
import { queryKeys } from 'config/Constants';
import { LabelWithImage } from 'components/LabelWithImage';
import { SwapiSubItemsList } from 'components/Lists/SwapiSubItemsList';
import { SwapiPlanet } from 'types/swapi';

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
export interface PlanetDetailsProps {
    planet: SwapiPlanet;
}

export const PlanetDetails: FC<PlanetDetailsProps> = ({ planet }) => {
    const { name, residents } = planet;
    return (
        <>
            <CircledLabel title={name} mode="CIRCLE">
                {name}
            </CircledLabel>
            <div>
                <SmallText>Population: </SmallText>
                <span>{planet.population}</span>
            </div>
            <SwapiSubItemsList
                items={residents}
                key="unique"
                queryKey={(id) => queryKeys.single.character(id)}
                to={(id) => `/characters/${id}`}
            />
        </>
    );
};
