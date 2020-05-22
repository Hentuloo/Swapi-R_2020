import React, { FC } from 'react';
import styled from 'styled-components';
import { useSwapiList } from 'hooks/useSwapiList';
import { queryKeys, swapiMaxResultsPerPage } from 'config/Constants';
import { getSwapiPlanets, getItemIdFromUrl } from 'config/helpers';
import { SwapiPlanet } from 'types/swapi';
import { LabelsListItem } from 'components/Lists/LabelsList';
import { LargePageListWithPagination } from 'components/Lists/LargePageList';

const Wrapper = styled.div`
    height: 100%;
`;

export interface PlanetsListProps {}

export const PlanetsList: FC<PlanetsListProps> = ({ ...props }) => {
    const [
        { resolvedData, error, status },
        { nextPage, prevPage, activePage },
    ] = useSwapiList<SwapiPlanet>({
        queryKey: (page) => queryKeys.lists.planets(page),
        queryFunc: (page) => () => getSwapiPlanets(page),
        generateQueryKeyForEachItem: (index) =>
            queryKeys.single.planet(index + 1),
        initialPage: 1,
    });

    const planets =
        resolvedData &&
        resolvedData.results.map(
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
        <Wrapper {...props}>
            {status === 'error' && `Error: ${error}`}
            <LargePageListWithPagination
                items={planets || []}
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
