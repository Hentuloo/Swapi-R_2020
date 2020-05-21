import React, { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from 'Layouts/MainLayout';
import { useSwapiList } from 'hooks/useSwapiList';
import { queryKeys } from 'config/Constants';
import { getItemIdFromUrl, getSwapiVehicles } from 'config/helpers';
import { SwapiVehicle } from 'types/swapi';
import { LabelsListItem } from 'components/Lists/LabelsList';
import { LargePageList } from 'components/Lists/LargePageList';

const Wrapper = styled.div`
    height: 100%;
`;

export interface VehiclesListProps {}

export const VehiclesList: FC<VehiclesListProps> = ({ ...props }) => {
    const { data, status } = useSwapiList<SwapiVehicle>({
        queryKey: queryKeys.lists.vehicles,
        queryFunc: getSwapiVehicles,
        generateQueryKeyForEachItem: (index) =>
            queryKeys.single.vehicle(index + 1),
    });

    if (status === 'error') return <p>Error :(</p>;
    if (status === 'loading' || !data) return <p>Loading...</p>;

    const vehicles = data.results.map(
        ({ name, url }): LabelsListItem => {
            const id = getItemIdFromUrl(url);
            return {
                id,
                title: name,
                image: 'https://source.unsplash.com/random/150x150',
                to: `/vehicles/${id}`,
            };
        },
    );

    return (
        <MainLayout>
            <Wrapper {...props}>
                <LargePageList items={vehicles} />
            </Wrapper>
        </MainLayout>
    );
};
