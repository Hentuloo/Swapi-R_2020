import React, { FC } from 'react';
import styled from 'styled-components';
import { LoadingSpiner } from 'components/LoadingSpiner';
import { ClearButton } from 'components/ClearButton';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;

    ${({ theme }) => theme.mediaQuery.lg} {
        padding-right: 300px;
    }
`;
const Header = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    align-items: center;
    color: ${({ theme }) => theme.color.black[1]};
`;
const LargeText = styled.span`
    font-weight: ${({ theme }) => theme.fw[1]};
    font-size: 6em;
    ${({ theme }) => theme.mediaQuery.md} {
        font-size: 10em;
    }
`;
const StyledLoadingSpiner = styled(LoadingSpiner)`
    margin: 10px 0px;
    ${({ theme }) => theme.mediaQuery.md} {
        margin: 20px;
    }
`;
const StyledClearButton = styled(ClearButton)`
    display: block;
    margin: 10px auto;
`;

export interface ErrorProps {}

export const Error: FC<ErrorProps> = ({ ...props }) => {
    const { goBack } = useHistory();

    return (
        <Wrapper {...props}>
            <div>
                <Header>
                    <LargeText>4</LargeText>
                    <StyledLoadingSpiner />
                    <LargeText>4</LargeText>
                </Header>
                <span>Something gone wrong</span>
                <StyledClearButton onClick={goBack}>Go back</StyledClearButton>
            </div>
        </Wrapper>
    );
};
