import { SwapiList, SwapiItemType } from 'types/swapi';
import {
    queryCache,
    usePaginatedQuery,
    PaginatedQueryResult,
    BaseQueryOptions,
} from 'react-query';
import { useState, useCallback } from 'react';

export interface UseSwapiListProps<
    Item,
    Response extends Promise<SwapiList<Item>> = Promise<SwapiList<Item>>
> {
    queryFunc: (page: number) => Response;
    queryKey: (page: number) => string;
    generateQueryKeyForEachItem?: (index: number, item: Item) => string;
    initialPage?: number;
    opts?: BaseQueryOptions;
}
export interface PaginationInterface {
    prevPage: () => void;
    nextPage: () => void;
    activePage: number;
}
export type UseSwapiListResponse<Item> = [
    PaginatedQueryResult<SwapiList<Item>>,
    PaginationInterface,
];

export const useSwapiList = <
    Item extends SwapiItemType,
    QueryResponse extends Promise<SwapiList<Item>> = Promise<SwapiList<Item>>
>({
    queryFunc,
    queryKey,
    generateQueryKeyForEachItem,
    initialPage,
    opts = { suspense: true },
}: UseSwapiListProps<Item, QueryResponse>): UseSwapiListResponse<Item> => {
    const [activePage, setPage] = useState(initialPage || 1);
    const queryResponse = usePaginatedQuery({
        queryKey: queryKey(activePage),
        queryFn: () => queryFunc(activePage),
        config: {
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
            ...opts,
        },
    });
    const prevPage = useCallback(() => {
        const { latestData } = queryResponse;
        setPage((old) => (!latestData || !latestData.previous ? old : old - 1));
    }, [queryResponse]);

    const nextPage = useCallback(() => {
        const { latestData } = queryResponse;
        setPage((old) => (!latestData || !latestData.next ? old : old + 1));
    }, [queryResponse]);

    return [queryResponse, { prevPage, nextPage, activePage }];
};
