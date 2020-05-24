import { exampleSwapiCharacterResponse } from 'tests/exampleSwapiCharacterResponse';

const charactersImagesPath = '/assets/images/characters/';
export const getCharacterImageById = (id: string | number) =>
    `${charactersImagesPath}${id}.jpg`;
const vehiclesImagesPath = '/assets/images/vehicles/';
export const getVehicleImageById = (id: string | number) =>
    `${vehiclesImagesPath}${id}.jpg`;
const planetsImagesPath = '/assets/images/planets/';
export const getPlanetsImageById = (id: string | number) =>
    `${planetsImagesPath}${id}.jpg`;

export const api = async <Response>(...args: any[]): Promise<Response> => {
    const res = await fetch(...args);
    return await res.json();
};
export const getItemIdFromUrl = (url: string) => {
    const urlParts = url.split('/').filter(Boolean);
    return Number(urlParts[urlParts.length - 1]);
};

export const getSwapiCharacters = () =>
    Promise.resolve(exampleSwapiCharacterResponse[0]);
export const getSwapiCharacter = () =>
    Promise.resolve(exampleSwapiCharacterResponse[0].results[0]);

export const getSwapiVehicles = () =>
    Promise.resolve(exampleSwapiCharacterResponse[0]);
export const getSwapiVehicle = () =>
    Promise.resolve(exampleSwapiCharacterResponse[0].results[0]);

export const getSwapiPlanets = () =>
    Promise.resolve(exampleSwapiCharacterResponse[0]);
export const getSwapiPlanet = () =>
    Promise.resolve(exampleSwapiCharacterResponse[0].results[0]);

export const getSwapiSpecies = () =>
    Promise.resolve(exampleSwapiCharacterResponse[0]);
export const getSwapiSpecie = () =>
    Promise.resolve(exampleSwapiCharacterResponse[0].results[0]);
