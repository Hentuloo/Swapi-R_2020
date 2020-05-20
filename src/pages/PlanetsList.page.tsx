import React, { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from 'Layouts/MainLayout';
import { useSwapiList } from 'hooks/useSwapiList';
import { QueryKeys } from 'config/Constants';
import { getSwapiPlanets, getItemIdFromUrl } from 'config/helpers';
import { SwapiPlanet } from 'types/swapi';
import { LabelsListItem } from 'components/LabelsList';
import { ItemsList } from 'components/ItemsList';

const Wrapper = styled.div`
    height: 100%;
`;

export interface PlanetsListProps {}

export const PlanetsList: FC<PlanetsListProps> = ({ ...props }) => {
    const { data, status } = useSwapiList<SwapiPlanet>({
        queryKey: QueryKeys.planets,
        queryFunc: getSwapiPlanets,
        generateQueryKeyForItem: (index) => QueryKeys.planet(index + 1),
    });

    if (status === 'error') return <p>Error :</p>;
    if (status === 'loading' || !data) return <p>Loading...</p>;

    const planets = data.results.map(
        ({ name, url }): LabelsListItem => {
            const id = getItemIdFromUrl(url);
            return {
                id,
                title: name,
                image: 'https://source.unsplash.com/random/150x150',
                to: `/planets/${id}`,
            };
        },
    );

    return (
        <MainLayout>
            <Wrapper {...props}>
                <ItemsList items={planets} />
            </Wrapper>
        </MainLayout>
    );
};
