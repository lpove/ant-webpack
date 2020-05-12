import React from "react";
import { Button } from "antd";
import { Link, RouteComponentProps } from "react-router-dom";
import logo from "./../../logo.svg";

const Demo: React.FC<RouteComponentProps> = () => {
    return (
        <div>
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
                <Link to='/ant'>Laern Ant Design</Link>

                <div>
                    测试 setState
                    {/* <Live />
                    <HooksLive /> */}
                </div>
            </header>
        </div>
    );
};

export default Demo;
