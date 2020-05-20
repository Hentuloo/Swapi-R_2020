export const Constants = {
    swapiUrl: 'https://swapi.dev/api',
};
export const QueryKeys = {
    characters: 'characters',
    character: (id: number | string) => `characters-${id}`,
    vehicles: 'vehicles',
    vehicle: (id: number | string) => `vehicles-${id}`,
    planets: 'planets',
    planet: (id: number | string) => `planets-${id}`,
};
