import React, { FC } from 'react';
import styled, { keyframes, css } from 'styled-components';
import droidBodySVG from 'assets/images/loading.svg';
import droidHeadSvg from 'assets/images/loading-2.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

const Wrapper = styled.div`
    position: relative;
    margin: 20px;
    width: 150px;
    text-align: center;
    padding-top: 30px;
    ${({ centered }: { centered?: boolean }) =>
        centered &&
        css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        `}
`;
const SpinerImage = styled.img`
    animation: ${rotate} 2s linear infinite;
`;
const HeadImage = styled.img`
    position: absolute;
    z-index: 2;
    top: 0%;
    left: 50%;
    transform: translate(-50%, calc(-80% + 30px));
`;

export interface LoadingSpinerProps {
    centered?: boolean;
}

export const LoadingSpiner: FC<LoadingSpinerProps> = ({
    centered,
    ...props
}) => {
    return (
        <Wrapper centered={centered} {...props}>
            <HeadImage src={droidHeadSvg} />
            <SpinerImage src={droidBodySVG} />
        </Wrapper>
    );
};
