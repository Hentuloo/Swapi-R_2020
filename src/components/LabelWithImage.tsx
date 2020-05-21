import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface WrapperProps {
    to?: string;
}
export const Wrapper = styled.div<WrapperProps>`
    position: relative;
    display: block;
    font-size: ${({ theme }) => theme.fs.l};
    color: ${({ theme }) => theme.color.white[0]};
    text-decoration: none;
    border-radius: 31px;
    overflow: hidden;
`;

export const ContentWrapper = styled.div`
    position: absolute;
    bottom: 15%;
    left: 5%;
    width: 90%;
`;
export const ImageWrapper = styled.div`
    width: 100%;
`;
export const Image = styled.img`
    display: block;
    width: 100%;
`;

export interface LabelWithImageProps {
    src?: string;
    title?: string;
    alt?: string;
    to?: string;
}

export const LabelWithImage: FC<LabelWithImageProps> = ({
    children,
    src = 'https://source.unsplash.com/random/400x550',
    title,
    alt,
    to,
    ...props
}) => {
    return (
        <Wrapper {...props} as={to ? Link : 'div'} to={to} title={title}>
            <ImageWrapper>
                <Image src={src} alt={alt} />
            </ImageWrapper>
            <ContentWrapper>{children}</ContentWrapper>
        </Wrapper>
    );
};
