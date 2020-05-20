import React, { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from 'Layouts/MainLayout';
import { Link } from 'react-router-dom';
import { useSwapiList } from 'hooks/useSwapiList';
import { QueryKeys } from 'config/Constants';
import { getSwapiCharacters, getItemIdFromUrl } from 'config/helpers';
import { SwapiCharacter } from 'types/swapi';

const Wrapper = styled.div``;

export interface CharactersProps {}

export const Characters: FC<CharactersProps> = ({ ...props }) => {
    const { data, status } = useSwapiList<SwapiCharacter>({
        queryKey: QueryKeys.characters,
        queryFunc: getSwapiCharacters,
        generateQueryKeyForItem: (index) => QueryKeys.character(index + 1),
    });

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'error') return <p>Error :(</p>;
    return (
        <MainLayout>
            <Wrapper {...props}>Characters</Wrapper>
            {data &&
                data.results.map((person) => {
                    const personId = getItemIdFromUrl(person.url);
                    return (
                        <article key={personId}>
                            <Link to={`/characters/${personId}`}>
                                <span>{person.name}</span>
                            </Link>
                        </article>
                    );
                })}
        </MainLayout>
    );
};
