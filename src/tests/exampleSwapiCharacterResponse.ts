import { SwapiList, SwapiCharacter } from 'types/swapi';

export const exampleSwapiCharacterResponse: SwapiList<SwapiCharacter>[] = [
    {
        count: 2,
        next: 'http://swapi.dev/api/people/?page=2',
        previous: null,
        results: [
            {
                detail: undefined,
                title: undefined,
                name: 'first champion',
                height: '172',
                mass: '77',
                hair_color: 'blond',
                skin_color: 'fair',
                eye_color: 'blue',
                birth_year: '19BBY',
                gender: 'male',
                homeworld: 'http://swapi.dev/api/planets/1/',
                films: [
                    'http://swapi.dev/api/films/1/',
                    'http://swapi.dev/api/films/2/',
                    'http://swapi.dev/api/films/3/',
                    'http://swapi.dev/api/films/6/',
                ],
                species: [],
                vehicles: [
                    'http://swapi.dev/api/vehicles/14/',
                    'http://swapi.dev/api/vehicles/30/',
                ],
                starships: [
                    'http://swapi.dev/api/starships/12/',
                    'http://swapi.dev/api/starships/22/',
                ],
                created: new Date(),
                edited: new Date(),
                url: 'http://swapi.dev/api/people/1/',
            },
        ],
    },
    {
        count: 2,
        next: null,
        previous: 'http://swapi.dev/api/people/?page=1',
        results: [
            {
                detail: undefined,
                title: undefined,
                name: 'second champion',
                height: '172',
                mass: '77',
                hair_color: 'blond',
                skin_color: 'fair',
                eye_color: 'blue',
                birth_year: '19BBY',
                gender: 'male',
                homeworld: 'http://swapi.dev/api/planets/1/',
                films: [
                    'http://swapi.dev/api/films/1/',
                    'http://swapi.dev/api/films/2/',
                    'http://swapi.dev/api/films/3/',
                    'http://swapi.dev/api/films/6/',
                ],
                species: [],
                vehicles: [
                    'http://swapi.dev/api/vehicles/14/',
                    'http://swapi.dev/api/vehicles/30/',
                ],
                starships: [
                    'http://swapi.dev/api/starships/12/',
                    'http://swapi.dev/api/starships/22/',
                ],
                created: new Date(),
                edited: new Date(),
                url: 'http://swapi.dev/api/people/1/',
            },
        ],
    },
];
