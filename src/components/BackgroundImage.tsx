import React, { FC } from 'react';
import styled from 'styled-components';
import { background } from 'assets/images/backgrounds';

const Wrapper = styled.img`
    position: fixed;
    min-height: 60%;
    min-width: 60%;
    max-width: 1300px;
    left: 50%;
    top: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
    opacity: 0.15;
`;

export interface BackgroundImageProps {}

export const BackgroundImage: FC<BackgroundImageProps> = ({ ...props }) => {
    return (
        <Wrapper
            {...props}
            sizes="(max-width: 2240px) 100vw, 2240px"
            srcSet={`
                    ${background[0]} 1024w,
                    ${background[1]} 1539w,
                    ${background[2]} 1891w,
                    ${background[3]} 2171w,
                    ${background[4]} 2240w`}
            src={background[4]}
        />
    );
};
