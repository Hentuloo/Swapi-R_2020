import { importAll } from 'config/helpers';

export const CharacterImageById = importAll(
    require.context('./', true, /\.(png|jpe?g|svg)$/),
    true,
);
