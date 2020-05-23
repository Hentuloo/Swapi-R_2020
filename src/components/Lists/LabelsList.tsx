import React, { FC } from 'react';
import styled from 'styled-components';
import { LabelWithImage } from '../LabelWithImage';

const Wrapper = styled.ul`
    list-style: none;
`;
export const LabelWrapper = styled.li``;

export interface LabelsListItem {
    id: string | number;
    title: string;
    image: string;
    to?: string;
    defaultImage?: string;
}
export interface LabelsListProps {
    items: LabelsListItem[];
}

export const LabelsList: FC<LabelsListProps> = ({ items, ...props }) => {
    return (
        <Wrapper {...props}>
            {items.map(({ title, image, to, id }) => (
                <LabelWrapper key={id}>
                    <LabelWithImage to={to} src={image} title={title}>
                        {title}
                    </LabelWithImage>
                </LabelWrapper>
            ))}
        </Wrapper>
    );
};
