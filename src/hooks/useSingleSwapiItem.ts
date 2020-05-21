import {
    getSwapiPlanet,
    getSwapiSpecie,
    getSwapiCharacter,
    getSwapiVehicle,
} from 'config/helpers';
import { useQuery } from 'react-query';
import { queryKeys } from 'config/Constants';

export interface UseSingleSwapiItem {
    planetId?: number;
    specieId?: number;
    characterId?: number;
    vehicleId?: number;
}

export const useSingleSwapiItem = ({
    planetId,
    specieId,
    characterId,
    vehicleId,
}: UseSingleSwapiItem) => {
    const character = useQuery({
        queryKey: !!characterId && queryKeys.single.character(characterId),
        queryFn: () => getSwapiCharacter(characterId || 0),
    });

    const planet = useQuery({
        queryKey: !!planetId && queryKeys.single.planet(planetId),
        queryFn: () => getSwapiPlanet(planetId || 0),
    });

    const specie = useQuery({
        queryKey: !!specieId && queryKeys.single.specie(specieId),
        queryFn: () => getSwapiSpecie(specieId || 0),
    });

    const vehicle = useQuery({
        queryKey: !!vehicleId && queryKeys.single.vehicle(vehicleId),
        queryFn: () => getSwapiVehicle(vehicleId || 0),
    });

    return {
        planet,
        specie,
        character,
        vehicle,
    };
};
