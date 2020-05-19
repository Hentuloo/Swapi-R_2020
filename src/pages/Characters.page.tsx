import React, { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from 'Layouts/MainLayout';

const Wrapper = styled.div``;

export interface CharactersProps {}

export const Characters: FC<CharactersProps> = ({ ...props }) => {
    return (
        <MainLayout>
            <Wrapper {...props}>Characters</Wrapper>
        </MainLayout>
    );
};
