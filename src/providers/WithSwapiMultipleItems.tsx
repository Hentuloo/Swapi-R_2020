import { useMemo } from 'react';
import {
    useQuery,
    queryCache,
    QueryResult,
    BaseQueryOptions,
} from 'react-query';
import { api, getItemIdFromUrl } from 'config/helpers';
import { SwapiItemType } from 'types/swapi';

type QueryType = string;

export interface WithSwapiMultipleItemsProps<T> {
    listKey: QueryType;
    items: string[];
    itemKey: (id: number | string) => QueryType;
    render: (item: QueryResult<T[]>) => any;
    opts?: BaseQueryOptions;
}

export const WithSwapiMultipleItems = <T extends SwapiItemType>({
    items,
    listKey,
    itemKey,
    render,
    opts,
}: WithSwapiMultipleItemsProps<T>) => {
    const itemsWithIds = useMemo(
        () =>
            items.map((url) => ({
                url,
                id: getItemIdFromUrl(url),
            })),
        [items],
    );
    const queryResults = useQuery<T[], QueryType>({
        queryKey: listKey,
        queryFn: () => {
            const promises = itemsWithIds.map(async ({ url, id }) => {
                const key = itemKey(id);
                const data = queryCache.getQueryData<T>(key);
                if (data) return Promise.resolve(data);
                const fetchedData = await api<T>(url);
                queryCache.setQueryData(key, fetchedData);
                return Promise.resolve(fetchedData);
            });
            return Promise.all(promises);
        },
        config: opts,
    });

    return render(queryResults);
};
