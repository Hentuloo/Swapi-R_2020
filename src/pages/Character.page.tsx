import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getSwapiCharacter, getItemIdFromUrl } from 'config/helpers';
import { MainLayout } from 'Layouts/MainLayout';
import { queryKeys } from 'config/Constants';
import { LabelWithImage } from 'components/LabelWithImage';
import { SwapiSubItemsList } from 'components/Lists/SwapiSubItemsList';
import { WithSwapiItem } from 'providers/WithSwapiItem';
import { SwapiSpecies, SwapiPlanet } from 'types/swapi';

const Wrapper = styled.div`
    width: 90%;
    max-width: 800px;
    display: grid;
    grid-row-gap: 25px;
    align-content: center;
    margin: 0px auto;
`;
const StyledLabelWithImage = styled(LabelWithImage)`
    max-width: 300px;
    margin: 0px auto;
`;
const Description = styled.div`
    display: grid;
    text-align: center;
    font-size: ${({ theme }) => theme.fs.m};
`;
export interface CharacterProps {}

export const Character: FC<CharacterProps> = () => {
    const { id } = useParams();
    const { status, data } = useQuery(queryKeys.single.character(id), () =>
        getSwapiCharacter(id),
    );

    const planetId = useMemo(() => {
        if (!data) return null;
        const { homeworld } = data;
        return getItemIdFromUrl(homeworld);
    }, [data]);

    const specieId = useMemo(() => {
        if (!data) return null;
        const { species } = data;
        return getItemIdFromUrl(species[0]);
    }, [data]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'error') return <p>Error :</p>;
    if (!data) return null;
    console.log(data);
    const { name, vehicles, homeworld, species } = data;
    return (
        <MainLayout>
            <Wrapper>
                <StyledLabelWithImage title={name} mode="CIRCLE">
                    {name}
                </StyledLabelWithImage>
                <Description>
                    <span>
                        {specieId ? (
                            <WithSwapiItem<SwapiSpecies>
                                queryKey={queryKeys.single.specie(specieId)}
                                url={species[0]}
                                render={({ data, status }) => {
                                    if (status !== 'success' || !data)
                                        return null;
                                    return `Species: ${data.name}`;
                                }}
                            />
                        ) : (
                            'Species: Human'
                        )}
                    </span>
                    <span>
                        Homeworld:
                        {planetId && (
                            <WithSwapiItem<SwapiPlanet>
                                queryKey={queryKeys.single.planet(planetId)}
                                url={homeworld}
                                render={({ data }) =>
                                    data ? (
                                        <StyledLabelWithImage
                                            to={`/planets/${planetId}`}
                                            mode="CIRCLE"
                                        >
                                            {data.name}
                                        </StyledLabelWithImage>
                                    ) : (
                                        ''
                                    )
                                }
                            />
                        )}
                    </span>
                </Description>

                <SwapiSubItemsList
                    items={vehicles}
                    queryKey={(id) => queryKeys.single.vehicle(id)}
                    to={(id) => `/vehicles/${id}`}
                />
            </Wrapper>
        </MainLayout>
    );
};
