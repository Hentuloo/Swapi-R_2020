import { Constants } from './Constants';
import { SwapiList, SwapiCharacter } from 'types/swapi';

export const api = async <Response>(...args: any[]): Promise<Response> => {
    const res = await fetch(...args);
    return await res.json();
};
export const getItemIdFromUrl = (url: string) => {
    const urlParts = url.split('/').filter(Boolean);
    return urlParts[urlParts.length - 1];
};
export const getSwapiCharacters = () =>
    api<SwapiList<SwapiCharacter>>(`${Constants.swapiUrl}/people`);
export const getSwapiCharacter = (id: number) =>
    api<SwapiCharacter>(`${Constants.swapiUrl}/people/${id}`);
