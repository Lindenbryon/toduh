import React, {Component} from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import List from './components/List';

const routes = [
    {
        name: 'list',
        path: '/',
        exact: true,
        main: List
    },
    {
        name: '',
        path: '/',
        exact: true,
        main: ''
    }
];

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <header className={'header'}>

            </header>
            {routes.map((route, index) => (
                <div>
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                </div>
            ))}
        </div>
    </BrowserRouter>
);

export default AppRouter;
