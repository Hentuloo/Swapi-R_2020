import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getSwapiPlanet } from 'config/helpers';
import { MainLayout } from 'Layouts/MainLayout';
import { QueryKeys } from 'config/Constants';

export interface PlanetProps {}

export const Planet: FC<PlanetProps> = () => {
    const { id } = useParams();
    const { status, data } = useQuery(QueryKeys.planet(id), () =>
        getSwapiPlanet(id),
    );

    console.log(data);
    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'error') return <p>Error :</p>;
    if (!data) return null;
    // return <Wrapper {...props}>{data.name}</Wrapper>;
    return <MainLayout>{data.name}</MainLayout>;
};
