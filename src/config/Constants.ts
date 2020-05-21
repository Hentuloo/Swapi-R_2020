export const Constants = {
    swapiUrl: 'https://swapi.dev/api',
};
export enum QuerySingleKeys {
    character = 'character',
    vehicle = 'vehicle',
    planet = 'planet',
    specie = 'specie',
}
export const queryKeys = {
    lists: {
        characters: 'characters',
        vehicles: 'vehicles',
        planets: 'planets',
        species: 'species',
    },
    single: {
        character: (id: number | string) =>
            `${queryKeys.lists.characters}-${id}`,
        vehicle: (id: number | string) => `${queryKeys.lists.vehicles}-${id}`,
        planet: (id: number | string) => `${queryKeys.lists.planets}-${id}`,
        specie: (id: number | string) => `${queryKeys.lists.species}-${id}`,
    },
};
