import React, { FC } from 'react';
import styled from 'styled-components';
import { LabelWithImage, LabelWithImageProps } from '../LabelWithImage';

const Wrapper = styled.ul`
    list-style: none;
`;
export const LabelWrapper = styled.li``;

export interface LabelsListItem extends LabelWithImageProps {
    id: string | number;
}
export interface LabelsListProps {
    items: LabelsListItem[];
}

export const LabelsList: FC<LabelsListProps> = ({ items, ...props }) => {
    return (
        <Wrapper {...props}>
            {items.map(({ title, src, to, id, defaultImage, ...props }) => (
                <LabelWrapper key={id}>
                    <LabelWithImage
                        to={to}
                        src={src}
                        title={title}
                        defaultImage={defaultImage}
                        {...props}
                    >
                        {title}
                    </LabelWithImage>
                </LabelWrapper>
            ))}
        </Wrapper>
    );
};
