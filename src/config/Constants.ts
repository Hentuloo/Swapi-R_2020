export const Constants = {
    swapiUrl: 'https://swapi.dev/api',
};
export const QueryKeys = {
    characters: 'characters',
    character: (id: number | string) => `characters-${id}`,
};
