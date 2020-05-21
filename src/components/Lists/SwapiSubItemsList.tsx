import React, { useMemo } from 'react';
import styled from 'styled-components';
import { getItemIdFromUrl } from 'config/helpers';
import { SwapiItemType } from 'types/swapi';
import { WithSwapiItem } from 'providers/WithSwapiItem';
import { LabelWithImage } from 'components/LabelWithImage';

const Wrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-around;
`;
export const ListItem = styled.li`
    max-width: 150px;
`;
export interface SwapiSubItemsListProps {
    items: string[];
    queryKey: (id: number) => string;
    to: (id: number) => string;
}

export const SwapiSubItemsList = <ItemType extends SwapiItemType>({
    items,
    queryKey,
    to,
    ...props
}: SwapiSubItemsListProps) => {
    const itemsWithId = useMemo(
        () =>
            items.map((url) => ({
                url,
                id: getItemIdFromUrl(url),
            })),
        [items],
    );
    if (itemsWithId.length === 0) return null;

    return (
        <Wrapper {...props}>
            {itemsWithId.map(({ id, url }) => (
                <WithSwapiItem<ItemType>
                    key={url}
                    queryKey={queryKey(Number(id))}
                    url={url}
                    render={({ data }) => {
                        if (!data) return null;
                        return (
                            <ListItem>
                                <LabelWithImage key={url} to={to(Number(id))}>
                                    {data.name || data.title}
                                </LabelWithImage>
                            </ListItem>
                        );
                    }}
                />
            ))}
        </Wrapper>
    );
};
