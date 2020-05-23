import { importAll } from 'config/helpers';

export const vehicleImageById = importAll(
    require.context('./', true, /\.(png|jpe?g|svg)$/),
    true,
);
