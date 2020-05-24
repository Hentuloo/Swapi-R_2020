import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { useSwapiList } from 'hooks/useSwapiList';
import { queryKeys, swapiMaxResultsPerPage } from 'config/Constants';
import {
    getItemIdFromUrl,
    getSwapiVehicles,
    getVehicleImageById,
} from 'config/helpers';
import { SwapiVehicle } from 'types/swapi';
import { LabelsListItem } from 'components/Lists/LabelsList';
import { LargePageListWithPagination } from 'components/Lists/LargePageList';
import defaultCharacterImage from 'assets/images/defaultCharacter.svg';

const Wrapper = styled.div`
    height: 100%;
`;

export interface VehiclesListProps {}

export const VehiclesList: FC<VehiclesListProps> = ({ ...props }) => {
    const [
        { resolvedData, error, status },
        { nextPage, prevPage, activePage },
    ] = useSwapiList<SwapiVehicle>({
        queryKey: queryKeys.lists.vehicles,
        queryFunc: getSwapiVehicles,
        generateQueryKeyForEachItem: (index) =>
            queryKeys.single.vehicle(index + 1),
        initialPage: 1,
    });

    const vehicles = useMemo(
        () =>
            resolvedData &&
            resolvedData.results.map(
                ({ name, url }): LabelsListItem => {
                    const id = getItemIdFromUrl(url);
                    return {
                        id,
                        title: name,
                        src: getVehicleImageById(id),
                        defaultImage: defaultCharacterImage,
                        to: `/vehicles/${id}`,
                        suspense: true,
                        perspectiveAnimation: true,
                    };
                },
            ),
        [resolvedData],
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
