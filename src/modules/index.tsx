import React from "react";
import { Route, RouteComponentProps, Router, Switch } from "react-router-dom";

import Config from "./Router";

const Home: React.FC<RouteComponentProps> = (props) => {
    return (
        <div>
            home test
            <Router history={props.history}>
                <Switch>
                    {Config.map((item) => {
                        return (
                            <Route
                                key={item.name}
                                exact={item.exact}
                                path={item.path}
                                component={item.component}
                            />
                        );
                    })}
                </Switch>
            </Router>
        </div>
    );
};

export default Home;
