import React, { FC } from 'react';
import styled from 'styled-components';
import { LabelsListProps, LabelsList } from './LabelsList';

const Wrapper = styled.div`
    width: 80%;
    max-width: 800px;
    height: 100%;
    margin: 0px auto;
    ${({ theme }) => theme.mediaQuery.lg} {
        width: 90%;
        max-width: 1200px;
    }
`;
const StyledLabelsList = styled(LabelsList)`
    ${({ theme }) => theme.mediaQuery.lg} {
        max-width: auto;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 150px;
    }
`;

export interface ItemsListProps extends LabelsListProps {}

export const ItemsList: FC<ItemsListProps> = ({ items, ...props }) => {
    return (
        <Wrapper {...props}>
            <StyledLabelsList items={items} />
        </Wrapper>
    );
};
