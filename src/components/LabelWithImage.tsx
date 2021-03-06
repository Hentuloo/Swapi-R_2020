import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useImage } from 'react-image';
import defaultCharacterImage from 'assets/images/defaultCharacter.svg';
import { usePerspectiveAnimation } from 'hooks/usePerspectiveAnimation';

export type LabelMode = 'SQUARE' | 'CIRCLE';

interface ComponentModeProps {
    to?: string;
    mode?: LabelMode;
}
export const Wrapper = styled.div<ComponentModeProps>`
    position: relative;
    display: block;

    color: ${({ theme }) => theme.color.white[0]};
    text-decoration: none;
    border-radius: 31px;
    overflow: hidden;
    ${({ mode }) =>
        mode === 'CIRCLE' &&
        css`
            display: grid;
            grid-template-columns: 70px 1fr;
            align-items: center;
            grid-column-gap: 20px;
        `}
`;

export const ContentWrapper = styled.div<ComponentModeProps>`
    position: absolute;
    bottom: 15%;
    left: 5%;
    width: 90%;
    ${({ mode }) =>
        mode === 'CIRCLE' &&
        css`
            position: relative;
            bottom: auto;
            left: auto;
        `}
`;
export const ImageWrapper = styled.div<ComponentModeProps>`
    width: 100%;
    ${({ mode }) =>
        mode === 'CIRCLE' &&
        css`
            height: 70px;
            border-radius: 50%;
            overflow: hidden;
        `}
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
    mode?: LabelMode;
    defaultImage?: string;
    suspense?: boolean;
    perspectiveAnimation?: boolean;
}

export const LabelWithImage: FC<LabelWithImageProps> = ({
    children,
    src = defaultCharacterImage,
    title,
    alt,
    to,
    defaultImage,
    mode = 'SQUARE',
    suspense = false,
    perspectiveAnimation = false,
    ...props
}) => {
    const perspectiveAnimRef = usePerspectiveAnimation<HTMLDivElement>(7);
    const { src: suspendedSrc } = useImage({
        srcList: [src, defaultImage || defaultCharacterImage],
        useSuspense: suspense,
    });
    return (
        <Wrapper
            ref={(ref: any) =>
                perspectiveAnimation && (perspectiveAnimRef.current = ref)
            }
            {...props}
            as={to ? Link : 'div'}
            to={to}
            title={title}
            mode={mode}
        >
            <ImageWrapper mode={mode}>
                <Image src={suspendedSrc} alt={alt} />
            </ImageWrapper>
            <ContentWrapper mode={mode}>{children}</ContentWrapper>
        </Wrapper>
    );
};
