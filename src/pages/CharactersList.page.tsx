import React, { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from 'Layouts/MainLayout';
import { useSwapiList } from 'hooks/useSwapiList';
import { QueryKeys } from 'config/Constants';
import { getSwapiCharacters, getItemIdFromUrl } from 'config/helpers';
import { SwapiCharacter } from 'types/swapi';
import { LabelsListItem } from 'components/LabelsList';
import { CustomItemsList } from 'components/CustomItemsList';
import characterImage from 'assets/images/characters/1.jpg';

const Wrapper = styled.div`
    height: 100%;
`;

export interface CharactersListProps {}

export const CharactersList: FC<CharactersListProps> = ({ ...props }) => {
    const { data, status } = useSwapiList<SwapiCharacter>({
        queryKey: QueryKeys.characters,
        queryFunc: getSwapiCharacters,
        generateQueryKeyForItem: (index) => QueryKeys.character(index + 1),
    });

    if (status === 'error') return <p>Error :</p>;
    if (status === 'loading' || !data) return <p>Loading...</p>;

    const characters = data.results.map(
        ({ name, url }): LabelsListItem => {
            const id = getItemIdFromUrl(url);
            return {
                id,
                title: name,
                image: characterImage,
                to: `/characters/${id}`,
            };
        },
    );
    return (
        <MainLayout {...props}>
            <Wrapper>
                <CustomItemsList items={characters} />
            </Wrapper>
        </MainLayout>
    );
};
