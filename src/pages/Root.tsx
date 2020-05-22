import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Characters } from './Characters/Characters.page';
import { Character } from './Characters/Character.page';
import { Planets } from './Planets/Planets.page';
import { Planet } from './Planets/Planet.page';
import { Vehicles } from './Vehicles/Vehicles.page';
import { Vehicle } from './Vehicles/Vehicle.page';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Routes } from 'config/Routes';
import { MainLayout } from 'Layouts/MainLayout';

const App = () => {
    return (
        <Router>
            <MainLayout>
                <Switch>
                    <Route
                        exact
                        path={Routes.PATHS.root.path}
                        component={Characters}
                    />
                    <Route
                        exact
                        path={Routes.PATHS.characters.path}
                        component={Characters}
                    />
                    <Route
                        path={Routes.PATHS.character.path}
                        component={Character}
                    />
                    <Route
                        exact
                        path={Routes.PATHS.planets.path}
                        component={Planets}
                    />
                    <Route path={Routes.PATHS.planet.path} component={Planet} />
                    <Route
                        exact
                        path={Routes.PATHS.vehicles.path}
                        component={Vehicles}
                    />
                    <Route
                        path={Routes.PATHS.vehicle.path}
                        component={Vehicle}
                    />
                </Switch>
            </MainLayout>
            <ReactQueryDevtools />
        </Router>
    );
};

export default App;
