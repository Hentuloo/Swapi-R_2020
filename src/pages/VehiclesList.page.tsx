import React, { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from 'Layouts/MainLayout';
import { useSwapiList } from 'hooks/useSwapiList';
import { QueryKeys } from 'config/Constants';
import { getItemIdFromUrl, getSwapiVehicles } from 'config/helpers';
import { SwapiVehicle } from 'types/swapi';
import { LabelsListItem } from 'components/LabelsList';
import { ItemsList } from 'components/ItemsList';

const Wrapper = styled.div`
    height: 100%;
`;

export interface VehiclesListProps {}

export const VehiclesList: FC<VehiclesListProps> = ({ ...props }) => {
    const { data, status } = useSwapiList<SwapiVehicle>({
        queryKey: QueryKeys.vehicles,
        queryFunc: getSwapiVehicles,
        generateQueryKeyForItem: (index) => QueryKeys.vehicle(index + 1),
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
                <ItemsList items={vehicles} />
            </Wrapper>
        </MainLayout>
    );
};
