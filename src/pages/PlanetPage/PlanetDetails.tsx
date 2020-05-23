import React, { FC } from 'react';
import styled from 'styled-components';
import { LabelWithImage } from 'components/LabelWithImage';
import { SwapiPlanet } from 'types/swapi';
import { RalatedLists } from './RelatedLists';
import { planetImageById } from 'assets/images/planets';
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
export interface PlanetDetailsProps {
    planet: SwapiPlanet;
    planetId: number | string;
}

export const PlanetDetails: FC<PlanetDetailsProps> = ({ planet, planetId }) => {
    const { name, residents } = planet;
    return (
        <Wrapper>
            <CircledLabel
                title={name}
                mode="CIRCLE"
                src={planetImageById[planetId]}
            >
                {name}
            </CircledLabel>
            <div>
                <SmallText>Population: </SmallText>
                <span>{planet.population}</span>
            </div>
            <RalatedLists residents={residents} />
        </Wrapper>
    );
};
