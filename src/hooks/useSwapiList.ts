import { useEffect } from 'react';
import { SwapiList, SwapiItemType } from 'types/swapi';
import { useQuery, queryCache } from 'react-query';

export interface UseSwapiListProps<Item, Response> {
    queryFunc: () => Response;
    queryKey: string;
    generateQueryKeyForItem: (index: number, item: Item) => string;
}

export const useSwapiList = <
    Item extends SwapiItemType,
    QueryResponse extends Promise<SwapiList<Item>> = Promise<SwapiList<Item>>
>({
    queryFunc,
    queryKey,
    generateQueryKeyForItem,
}: UseSwapiListProps<Item, QueryResponse>) => {
    const queryResponse = useQuery(queryKey, queryFunc);

    useEffect(() => {
        //cache fetched list
        const { data, status } = queryResponse;
        if (status !== 'success' || !data) return;

        data.results.forEach((item, index) => {
            queryCache.prefetchQuery(generateQueryKeyForItem(index, item), () =>
                Promise.resolve(item),
            );
        });
    }, [generateQueryKeyForItem, queryResponse]);

    return queryResponse;
};
