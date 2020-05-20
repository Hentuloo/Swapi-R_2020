import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CharactersList } from './CharactersList.page';
import { Character } from './Character.page';
import { PlanetsList } from './PlanetsList.page';
import { Planet } from './Planet.page';
import { VehiclesList } from './VehiclesList.page';
import { Vehicle } from './Vehicle.page';
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
