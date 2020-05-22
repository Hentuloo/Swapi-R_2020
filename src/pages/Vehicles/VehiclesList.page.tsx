import React, { FC } from 'react';
import styled from 'styled-components';
import { useSwapiList } from 'hooks/useSwapiList';
import { queryKeys, swapiMaxResultsPerPage } from 'config/Constants';
import { getItemIdFromUrl, getSwapiVehicles } from 'config/helpers';
import { SwapiVehicle } from 'types/swapi';
import { LabelsListItem } from 'components/Lists/LabelsList';
import { LargePageListWithPagination } from 'components/Lists/LargePageList';

const Wrapper = styled.div`
    height: 100%;
`;

export interface VehiclesListProps {}

export const VehiclesList: FC<VehiclesListProps> = ({ ...props }) => {
    const [
        { resolvedData, error, status },
        { nextPage, prevPage, activePage },
    ] = useSwapiList<SwapiVehicle>({
        queryKey: (page) => queryKeys.lists.vehicles(page),
        queryFunc: (page) => () => getSwapiVehicles(page),
        generateQueryKeyForEachItem: (index) =>
            queryKeys.single.vehicle(index + 1),
        initialPage: 1,
    });

    const vehicles =
        resolvedData &&
        resolvedData.results.map(
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
        <Wrapper {...props}>
            {status === 'error' && `Error: ${error}`}
            <LargePageListWithPagination
                items={vehicles || []}
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
