import { importAll } from 'config/helpers';

export const planetImageById = importAll(
    require.context('./', true, /\.(png|jpe?g|svg)$/),
    true,
);
