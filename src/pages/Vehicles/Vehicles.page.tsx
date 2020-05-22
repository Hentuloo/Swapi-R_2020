import React, { FC, Suspense } from 'react';
import { LoadingSpiner } from 'components/LoadingSpiner';
import { VehiclesList } from './VehiclesList.page';

export interface VehiclesProps {}

export const Vehicles: FC<VehiclesProps> = ({ ...props }) => {
    return (
        <Suspense fallback={<LoadingSpiner />}>
            <VehiclesList {...props} />
        </Suspense>
    );
};
