import { SwapiItemType } from 'types/swapi';
import { useQuery, QueryResult, BaseQueryOptions } from 'react-query';
import { api } from 'config/helpers';

type QueryType = string;

export interface WithSwapiItemProps<T> {
    url: string;
    queryKey: QueryType;
    render: (item: QueryResult<T>) => any;
    opts?: BaseQueryOptions;
}

export const WithSwapiItem = <T extends SwapiItemType>({
    queryKey,
    url,
    render,
    opts,
}: WithSwapiItemProps<T>) => {
    const queryResult = useQuery<T, QueryType>(queryKey, () => api(url), opts);

    return render(queryResult);
};
