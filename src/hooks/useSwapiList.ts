import { SwapiList, SwapiItemType } from 'types/swapi';
import { useQuery, queryCache } from 'react-query';

export interface UseSwapiListProps<Item, Response> {
    queryFunc: () => Response;
    queryKey: string;
    generateQueryKeyForEachItem?: (index: number, item: Item) => string;
}

export const useSwapiList = <
    Item extends SwapiItemType,
    QueryResponse extends Promise<SwapiList<Item>> = Promise<SwapiList<Item>>
>({
    queryFunc,
    queryKey,
    generateQueryKeyForEachItem,
}: UseSwapiListProps<Item, QueryResponse>) => {
    const queryResponse = useQuery(queryKey, queryFunc, {
        onSuccess: (data) => {
            //cache fetched list
            if (!generateQueryKeyForEachItem) return;
            data.results.forEach((item, index) => {
                queryCache.prefetchQuery(
                    generateQueryKeyForEachItem(index, item),
                    () => Promise.resolve(item),
                );
            });
        },
    });

    return queryResponse;
};
