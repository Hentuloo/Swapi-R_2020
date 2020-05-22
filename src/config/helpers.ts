import { Constants } from './Constants';
import {
    SwapiList,
    SwapiCharacter,
    SwapiVehicle,
    SwapiPlanet,
    SwapiSpecies,
} from 'types/swapi';

export const api = async <Response>(...args: any[]): Promise<Response> => {
    const res = await fetch(...args);
    return await res.json();
};
export const getItemIdFromUrl = (url: string) => {
    const urlParts = url.split('/').filter(Boolean);
    return Number(urlParts[urlParts.length - 1]);
};

export const getSwapiCharacters = (id: number) =>
    api<SwapiList<SwapiCharacter>>(`${Constants.swapiUrl}/people/?page=${id}`);
export const getSwapiCharacter = (id: number) =>
    api<SwapiCharacter>(`${Constants.swapiUrl}/people/${id}`);

export const getSwapiVehicles = (id: number) =>
    api<SwapiList<SwapiVehicle>>(`${Constants.swapiUrl}/vehicles/?page=${id}`);
export const getSwapiVehicle = (id: number) =>
    api<SwapiVehicle>(`${Constants.swapiUrl}/vehicles/${id}`);

export const getSwapiPlanets = (id: number) =>
    api<SwapiList<SwapiPlanet>>(`${Constants.swapiUrl}/planets/?page=${id}`);
export const getSwapiPlanet = (id: number) =>
    api<SwapiPlanet>(`${Constants.swapiUrl}/planets/${id}`);

export const getSwapiSpecies = (id: number) =>
    api<SwapiList<SwapiSpecies>>(`${Constants.swapiUrl}/species/?page=${id}`);
export const getSwapiSpecie = (id: number) =>
    api<SwapiSpecies>(`${Constants.swapiUrl}/species/${id}`);
