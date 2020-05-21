import { SwapiItemType } from 'types/swapi';
import { useQuery, QueryResult } from 'react-query';
import { api } from 'config/helpers';

type QueryType = string;

export interface WithSwapiItemProps<T> {
    url: string;
    queryKey: QueryType;
    render: (item: QueryResult<T>) => any;
}

export const WithSwapiItem = <T extends SwapiItemType>({
    queryKey,
    url,
    render,
}: WithSwapiItemProps<T>) => {
    const queryResult = useQuery<T, QueryType>(queryKey, () => api(url));

    return render(queryResult);
};
