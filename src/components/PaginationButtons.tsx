import React, { FC } from 'react';
import styled from 'styled-components';
import { ClearButton } from './ClearButton';

const Wrapper = styled.div``;

export const CenteredText = styled.span``;

export interface PaginationButtonsProps {
    prev?: () => void;
    next?: () => void;
    active?: number;
    maxPage?: number;
}

export const PaginationButtons: FC<PaginationButtonsProps> = ({
    prev,
    next,
    active,
    maxPage,
    ...props
}) => {
    return (
        <Wrapper {...props}>
            {prev && <ClearButton onClick={prev}>Prev</ClearButton>}
            {active && (
                <CenteredText>
                    {active}
                    {maxPage && `/${maxPage}`}
                </CenteredText>
            )}
            {next && <ClearButton onClick={next}>next</ClearButton>}
        </Wrapper>
    );
};
