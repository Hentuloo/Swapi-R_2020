import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Characters } from './Characters.page';
import { Planets } from './Planets.page';
import { Vehicles } from './Vehicles.page';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Characters} />
                <Route path="/characters" component={Characters} />
                <Route path="/planets" component={Planets} />
                <Route path="/vehicles" component={Vehicles} />
            </Switch>
        </Router>
    );
};

export default App;
