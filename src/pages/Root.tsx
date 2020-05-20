import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Characters } from './Characters.page';
import { Planets } from './Planets.page';
import { Vehicles } from './Vehicles.page';
import { Character } from './Character.page';
import { ReactQueryDevtools } from 'react-query-devtools';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Characters} />
                <Route exact path="/characters" component={Characters} />
                <Route path="/characters/:id" component={Character} />
                <Route path="/planets" component={Planets} />
                <Route path="/vehicles" component={Vehicles} />
            </Switch>
            <ReactQueryDevtools />
        </Router>
    );
};

export default App;
