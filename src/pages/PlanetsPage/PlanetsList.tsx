import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { useSwapiList } from 'hooks/useSwapiList';
import { queryKeys, swapiMaxResultsPerPage } from 'config/Constants';
import {
    getSwapiPlanets,
    getItemIdFromUrl,
    getPlanetsImageById,
} from 'config/helpers';
import { SwapiPlanet } from 'types/swapi';
import { LabelsListItem } from 'components/Lists/LabelsList';
import { LargePageListWithPagination } from 'components/Lists/LargePageList';
import defaultCharacterImage from 'assets/images/defaultCharacter.svg';

const Wrapper = styled.div`
    height: 100%;
`;

export interface PlanetsListProps {}

export const PlanetsList: FC<PlanetsListProps> = ({ ...props }) => {
    const [
        { resolvedData, error, status },
        { nextPage, prevPage, activePage },
    ] = useSwapiList<SwapiPlanet>({
        queryKey: queryKeys.lists.planets,
        queryFunc: getSwapiPlanets,
        generateQueryKeyForEachItem: (index) =>
            queryKeys.single.planet(index + 1),
        initialPage: 1,
    });

    const planets = useMemo(
        () =>
            resolvedData &&
            resolvedData.results.map(
                ({ name, url }): LabelsListItem => {
                    const id = getItemIdFromUrl(url);
                    return {
                        id,
                        title: name,
                        src: getPlanetsImageById(id),
                        to: `/planets/${id}`,
                        suspense: true,
                        perspectiveAnimation: true,
                        defaultImage: defaultCharacterImage,
                    };
                },
            ),
        [resolvedData],
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
