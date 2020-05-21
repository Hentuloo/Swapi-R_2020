import { Constants } from './Constants';
import {
    SwapiList,
    SwapiCharacter,
    SwapiVehicle,
    SwapiPlanet,
} from 'types/swapi';

export const api = async <Response>(...args: any[]): Promise<Response> => {
    const res = await fetch(...args);
    return await res.json();
};
export const getItemIdFromUrl = (url: string) => {
    if (!url) return '';
    const urlParts = url.split('/').filter(Boolean);
    return urlParts[urlParts.length - 1];
};
export const getSwapiCharacters = () =>
    api<SwapiList<SwapiCharacter>>(`${Constants.swapiUrl}/people`);
export const getSwapiCharacter = (id: number) =>
    api<SwapiCharacter>(`${Constants.swapiUrl}/people/${id}`);

export const getSwapiVehicles = () =>
    api<SwapiList<SwapiVehicle>>(`${Constants.swapiUrl}/vehicles`);
export const getSwapiVehicle = (id: number) =>
    api<SwapiVehicle>(`${Constants.swapiUrl}/vehicles/${id}`);

export const getSwapiPlanets = () =>
    api<SwapiList<SwapiPlanet>>(`${Constants.swapiUrl}/planets`);
export const getSwapiPlanet = (id: number) =>
    api<SwapiPlanet>(`${Constants.swapiUrl}/planets/${id}`);
