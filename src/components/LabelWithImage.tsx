import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import cornerSvg from 'assets/images/corner.svg';
import { Link } from 'react-router-dom';

interface WrapperProps {
    to?: string;
}
export const Wrapper = styled.div<WrapperProps>`
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-column-gap: 30px;
    margin: 40px 0px;
    font-size: ${({ theme }) => theme.fs.l};
    color: ${({ theme }) => theme.color.brand[0]};
    text-decoration: none;
`;

export const ContentWrapper = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.color.gray[0]};
    ${({ centerContent }: { centerContent: boolean }) =>
        centerContent &&
        css`
            display: grid;
            justify-content: center;
            align-content: center;
        `}
`;
export const AvatarWrapper = styled.div`
    position: relative;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    transform: translate(0px, -25px);
`;
export const AvatarImage = styled.img`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const CornerSvgElement = styled.img`
    position: absolute;
    right: 100%;
    height: 100%;
`;

export interface LabelWithImageProps {
    src?: string;
    title?: string;
    alt?: string;
    to?: string;
    centerContent?: boolean;
}

export const LabelWithImage: FC<LabelWithImageProps> = ({
    children,
    src = 'https://source.unsplash.com/random/150x150',
    title,
    alt,
    to,
    centerContent = false,
    ...props
}) => {
    return (
        <Wrapper {...props} as={to ? Link : 'div'} to={to} title={title}>
            <AvatarWrapper>
                <AvatarImage src={src} alt={alt} />
            </AvatarWrapper>
            <ContentWrapper centerContent={centerContent}>
                {children}
                <CornerSvgElement src={cornerSvg} />
            </ContentWrapper>
        </Wrapper>
    );
};
