import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { getItemIdFromUrl } from 'config/helpers';
import { LabelWithImage } from 'components/LabelWithImage';
import { useSingleSwapiItem } from 'hooks/useSingleSwapiItem';
import { SwapiCharacter } from 'types/swapi';
import { RalatedLists } from './RelatedLists';
import { CharacterImageById } from 'assets/images/characters';
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

export interface CharacterDetailsProps {
    character: SwapiCharacter;
    characterId: number | string;
}

export const CharacterDetails: FC<CharacterDetailsProps> = ({
    character,
    characterId,
}) => {
    const planetId = useMemo(
        () => character && getItemIdFromUrl(character.homeworld),
        [character],
    );

    const specieId = useMemo(
        () => character && getItemIdFromUrl(character.species[0] || ''),
        [character],
    );

    const {
        planet: { data: planetData },
    } = useSingleSwapiItem({ planetId });
    const {
        specie: { data: specieData },
    } = useSingleSwapiItem({ specieId });

    const { name, vehicles } = character;
    return (
        <Wrapper>
            <CircledLabel
                title={name}
                mode="CIRCLE"
                src={CharacterImageById[characterId]}
            >
                {name}
            </CircledLabel>
            {planetData && (
                <CircledLabel
                    to={`/planets/${planetId}`}
                    mode="CIRCLE"
                    src={planetImageById[planetId]}
                >
                    <SmallText>Homeworld: </SmallText>
                    {planetData.name}
                </CircledLabel>
            )}
            {specieData && (
                <div>
                    <SmallText>Species: </SmallText>
                    <span>{specieData.name}</span>
                </div>
            )}
            {character.species.length === 0 && (
                <div>
                    <SmallText>Species: </SmallText>
                    <span>Human</span>
                </div>
            )}
            <RalatedLists vehicles={vehicles} />
        </Wrapper>
    );
};
