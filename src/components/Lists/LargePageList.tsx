import React, { FC } from 'react';
import styled from 'styled-components';
import { LabelsListProps, LabelsList, LabelWrapper } from './LabelsList';
import {
    PaginationButtonsProps,
    PaginationButtons,
} from 'components/PaginationButtons';

const Wrapper = styled.div`
    width: 80%;
    max-width: 800px;
    height: 100%;
    margin: 0px auto;
    ${({ theme }) => theme.mediaQuery.lg} {
        width: 50%;
        max-width: 1200px;
        margin: 0px 0px 0px auto;
    }
`;
const StyledLabelsList = styled(LabelsList)`
    display: grid;
    width: 90%;
    grid-row-gap: 30px;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 1fr;
    margin: 70px auto 0px;
    padding-bottom: 100px;
    justify-items: center;

    ${({ theme }) => theme.mediaQuery.lg} {
        width: 100%;
        max-width: none;
    }

    ${LabelWrapper} {
        max-width: 150px;
        &:nth-child(odd) {
            margin-top: 40px;
        }
        &:nth-child(even) {
            margin-top: -40px;
        }
        ${({ theme }) => theme.mediaQuery.vlg} {
            max-width: 200px;
        }
    }
`;

export interface LargePageListProps extends LabelsListProps {}

export const LargePageList: FC<LargePageListProps> = ({ items, ...props }) => {
    return (
        <Wrapper {...props}>
            <StyledLabelsList items={items} />
        </Wrapper>
    );
};

const StyledPaginationButtons = styled(PaginationButtons)`
    position: fixed;
    top: 10px;
    left: 20px;
    ${({ theme }) => theme.mediaQuery.md} {
        top: auto;
        left: auto;
        right: 10px;
        bottom: 5%;
    }
`;

export interface LargePageListWithPaginationProps
    extends LabelsListProps,
        PaginationButtonsProps {}

export const LargePageListWithPagination: FC<LargePageListWithPaginationProps> = ({
    items,
    prev,
    next,
    active,
    maxPage,
    ...props
}) => {
    return (
        <Wrapper {...props}>
            <StyledLabelsList items={items} />
            <StyledPaginationButtons
                next={next}
                prev={prev}
                active={active}
                maxPage={maxPage}
            />
        </Wrapper>
    );
};
