import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.white[0]};
    text-transform: uppercase;
    text-decoration: underline;
    padding: 10px 10px;
`;
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
            {prev && <Button onClick={prev}>Prev</Button>}
            {active && (
                <CenteredText>
                    {active}
                    {maxPage && `/${maxPage}`}
                </CenteredText>
            )}
            {next && <Button onClick={next}>next</Button>}
        </Wrapper>
    );
};
