import React, { FC } from 'react';
import styled from 'styled-components';
import { useSwapiList } from 'hooks/useSwapiList';
import { queryKeys, swapiMaxResultsPerPage } from 'config/Constants';
import {
    getSwapiCharacters,
    getItemIdFromUrl,
    importAll,
} from 'config/helpers';
import { SwapiCharacter } from 'types/swapi';
import { LabelsListItem } from 'components/Lists/LabelsList';
import { LargePageListWithPagination } from 'components/Lists/LargePageList';
import defaultCharacterImage from 'assets/images/defaultCharacter.svg';

const images = importAll(
    require.context('assets/images/characters/', true, /\.(png|jpe?g|svg)$/),
    true,
);

const Wrapper = styled.div`
    position: relative;
    height: 100%;
`;

export interface CharactersListProps {}
export const CharactersList: FC<CharactersListProps> = () => {
    const [
        { resolvedData, error, status },
        { nextPage, prevPage, activePage },
    ] = useSwapiList<SwapiCharacter>({
        queryKey: (page) => queryKeys.lists.characters(page),
        queryFunc: (page) => () => getSwapiCharacters(page),
        generateQueryKeyForEachItem: (index) =>
            queryKeys.single.character(index + 1),
        initialPage: 1,
    });

    const characters =
        resolvedData &&
        resolvedData.results.map(
            ({ name, url }): LabelsListItem => {
                const id = getItemIdFromUrl(url);

                return {
                    id,
                    title: name,
                    image: images[id] || defaultCharacterImage,
                    to: `/characters/${id}`,
                    defaultImage: defaultCharacterImage,
                };
            },
        );

    return (
        <Wrapper>
            {status === 'error' && `Error: ${error}`}
            <LargePageListWithPagination
                items={characters || []}
                next={nextPage}
                prev={prevPage}
                active={activePage}
                maxPage={
                    resolvedData &&
                    Math.ceil(resolvedData.count / swapiMaxResultsPerPage)
                }
            />
        </Wrapper>
    );
};
