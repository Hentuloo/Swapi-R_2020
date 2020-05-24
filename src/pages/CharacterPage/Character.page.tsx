import React, { FC } from 'react';
import styled from 'styled-components';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { useSingleSwapiItem } from 'hooks/useSingleSwapiItem';
import { CharacterDetails } from './CharacterDetails';
import { ClearButton } from 'components/ClearButton';

const Wrapper = styled.div`
    width: 90%;
    min-height: 90vh;
    max-width: 1000px;
    display: grid;
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
    const { goBack } = useHistory();
    const { id } = useParams();
    const {
        character: { data },
    } = useSingleSwapiItem({ characterId: Number(id) });

    if (!Number(id) || (data && data.detail)) return <Redirect to="/404" />;
    if (!data) return null;

    return (
        <Wrapper>
            <CharacterDetails character={data} characterId={id} />
            <ClearButton onClick={goBack}>Go back</ClearButton>
        </Wrapper>
    );
};
