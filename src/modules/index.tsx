import React from "react";
import Demo from "./Demo";
import { Route, RouteComponentProps, Router, Switch } from "react-router-dom";

// import { Button } from "antd";
// import Live from "./modules/live";
// import HooksLive from "./modules/hooksLive";

const Home: React.FC<RouteComponentProps> = (props) => {
    return (
        <div>
            home
            <Router history={props.history}>
                <Switch>
                    <Route exact path='/' component={Demo} />
                    {/* <Route path='demo' component={Demo} /> */}
                </Switch>
            </Router>
        </div>
    );
};

export default Home;
