import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getSwapiCharacter } from 'config/helpers';
import { MainLayout } from 'Layouts/MainLayout';
import { QueryKeys } from 'config/Constants';

export interface CharacterProps {}

export const Character: FC<CharacterProps> = () => {
    const { id } = useParams();
    const { status, data } = useQuery(QueryKeys.character(id), () =>
        getSwapiCharacter(id),
    );

    console.log(data);
    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'error') return <p>Error :</p>;
    if (!data) return null;
    // return <Wrapper {...props}>{data.name}</Wrapper>;
    return <MainLayout>{data.name}</MainLayout>;
};
