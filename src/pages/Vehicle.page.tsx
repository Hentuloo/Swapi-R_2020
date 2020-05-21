import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getSwapiVehicle } from 'config/helpers';
import { MainLayout } from 'Layouts/MainLayout';
import { queryKeys } from 'config/Constants';
import { SwapiSubItemsList } from 'components/Lists/SwapiSubItemsList';

export interface VehicleProps {}

export const Vehicle: FC<VehicleProps> = () => {
    const { id } = useParams();
    const { status, data } = useQuery(queryKeys.single.vehicle(id), () =>
        getSwapiVehicle(id),
    );

    console.log(data);
    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'error') return <p>Error :</p>;
    if (!data) return null;

    const { pilots } = data;
    return (
        <MainLayout>
            {data.name}
            <SwapiSubItemsList
                items={pilots}
                queryKey={(id) => queryKeys.single.character(id)}
                to={(id) => `/characters/${id}`}
            />
        </MainLayout>
    );
};
