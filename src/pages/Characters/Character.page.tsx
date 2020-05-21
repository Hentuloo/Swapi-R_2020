import React, { FC } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { MainLayout } from 'Layouts/MainLayout';
import { useSingleSwapiItem } from 'hooks/useSingleSwapiItem';
import { CharacterDetails } from './CharacterDetails';

const Wrapper = styled.div`
    width: 90%;
    max-width: 800px;
    display: grid;
    grid-row-gap: 25px;
    align-content: center;
    margin: 0px auto;
    text-align: center;
    font-weight: ${({ theme }) => theme.fw[1]};
    font-size: ${({ theme }) => theme.fs.m};

    ${({ theme }) => theme.mediaQuery.md} {
        font-size: ${({ theme }) => theme.fs.m};
    }
    ${({ theme }) => theme.mediaQuery.lg} {
        padding-right: 300px;
    }
`;

export interface CharacterProps {}

export const Character: FC<CharacterProps> = () => {
    const { id } = useParams();
    const {
        character: { data },
    } = useSingleSwapiItem({ characterId: Number(id) });

    if (!data) return null;
    return (
        <MainLayout>
            <Wrapper>
                <CharacterDetails character={data} />
            </Wrapper>
        </MainLayout>
    );
};
