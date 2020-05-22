export const Constants = {
    swapiUrl: 'https://swapi.dev/api',
};
export enum QuerySingleKeys {
    character = 'character',
    vehicle = 'vehicle',
    planet = 'planet',
    specie = 'specie',
}
export const swapiMaxResultsPerPage = 10;
export const queryKeys = {
    keys: {
        characters: 'characters',
        vehicles: 'vehicles',
        planets: 'planets',
        species: 'species',
    },
    lists: {
        characters: (id: number | string) =>
            `${queryKeys.lists.characters}/${id}`,
        vehicles: (id: number | string) => `${queryKeys.keys.vehicles}/${id}`,
        planets: (id: number | string) => `${queryKeys.keys.planets}/${id}`,
        species: (id: number | string) => `${queryKeys.keys.species}/${id}`,
    },
    single: {
        character: (id: number | string) =>
            `${queryKeys.lists.characters}-${id}`,
        vehicle: (id: number | string) => `${queryKeys.keys.vehicles}-${id}`,
        planet: (id: number | string) => `${queryKeys.keys.planets}-${id}`,
        specie: (id: number | string) => `${queryKeys.keys.species}-${id}`,
    },
};
