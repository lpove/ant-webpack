import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./modules";
import "./App.scss";

const App: React.FC = () => {
    return (
        <div className='App'>
            {/* 这里可以决定基础的路由设计名字 */}
            <BrowserRouter basename='/'>
                {/* <Route path={["/users/:id", "/profile/:id"]} component={Demo} /> */}
                <Route component={Home} />
            </BrowserRouter>
        </div>
    );
};

export default App;
