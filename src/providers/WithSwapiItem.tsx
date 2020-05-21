import { SwapiItemType } from 'types/swapi';
import { useQuery, QueryResult } from 'react-query';
import { api } from 'config/helpers';

type QueryType = string;
export interface WithSwapiItemProps<ItemType> {
    url: string;
    queryKey: QueryType;
    render: (item: QueryResult<ItemType>) => any;
}

export const WithSwapiItem = <ItemType extends SwapiItemType>({
    queryKey,
    url,
    render,
}: WithSwapiItemProps<ItemType>) => {
    const queryResult = useQuery<ItemType, QueryType>(queryKey, () => api(url));

    return render(queryResult);
};
