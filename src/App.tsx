import React from "react";
import logo from "./logo.svg";
import { Button } from "antd";
import Live from "./modules/live";
import HooksLive from "./modules/hooksLive";
import "./App.scss";

const App: React.FC = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <Button type='primary'>AntD Button</Button>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
                <div>
                    测试 setState
                    <Live />
                    <HooksLive />
                </div>
            </header>
        </div>
    );
};

export default App;
