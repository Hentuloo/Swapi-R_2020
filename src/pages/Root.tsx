import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CharactersList } from './Characters/CharactersList.page';
import { Character } from './Characters/Character.page';
import { PlanetsList } from './Planets/PlanetsList.page';
import { Planet } from './Planets/Planet.page';
import { VehiclesList } from './Vehicles/VehiclesList.page';
import { Vehicle } from './Vehicles/Vehicle.page';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Routes } from 'config/Routes';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path={Routes.PATHS.root.path}
                    component={CharactersList}
                />
                <Route
                    exact
                    path={Routes.PATHS.characters.path}
                    component={CharactersList}
                />
                <Route
                    path={Routes.PATHS.character.path}
                    component={Character}
                />
                <Route
                    exact
                    path={Routes.PATHS.planets.path}
                    component={PlanetsList}
                />
                <Route path={Routes.PATHS.planet.path} component={Planet} />
                <Route
                    exact
                    path={Routes.PATHS.vehicles.path}
                    component={VehiclesList}
                />
                <Route path={Routes.PATHS.vehicle.path} component={Vehicle} />
            </Switch>
            <ReactQueryDevtools />
        </Router>
    );
};

export default App;
