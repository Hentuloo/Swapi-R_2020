import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getSwapiPlanet } from 'config/helpers';
import { MainLayout } from 'Layouts/MainLayout';
import { queryKeys } from 'config/Constants';
import { SwapiSubItemsList } from 'components/Lists/SwapiSubItemsList';

export interface PlanetProps {}

export const Planet: FC<PlanetProps> = () => {
    const { id } = useParams();
    const { status, data } = useQuery(queryKeys.single.planet(id), () =>
        getSwapiPlanet(id),
    );

    console.log(data);
    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'error') return <p>Error :</p>;
    if (!data) return null;
    const { residents } = data;
    // return <Wrapper {...props}>{data.name}</Wrapper>;
    return (
        <MainLayout>
            {data.name}
            <SwapiSubItemsList
                items={residents}
                queryKey={(id) => queryKeys.single.character(id)}
                to={(id) => `/characters/${id}`}
            />
        </MainLayout>
    );
};
