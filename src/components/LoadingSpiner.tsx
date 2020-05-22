import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import loadingSVG from 'assets/images/loading.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

const Wrapper = styled.div`
    margin: 20px;
`;
const SpinerImage = styled.img`
    animation: ${rotate} 2s linear infinite;
`;

export interface LoadingSpinerProps {}

export const LoadingSpiner: FC<LoadingSpinerProps> = ({ ...props }) => {
    return (
        <Wrapper {...props}>
            <SpinerImage src={loadingSVG} />
        </Wrapper>
    );
};
