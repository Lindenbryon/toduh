import React, {Component} from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import List from './components/List';

const routes = [
    {
        name: 'list',
        path: '/',
        exact: true,
        main: List
    }
];

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <header className={'header'}>
                <ul>
                    <li>
                        <NavLink to="/" className="normal" activeClassName="active" exact>home</NavLink>
                    </li>
                    <li></li>
                </ul>
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
