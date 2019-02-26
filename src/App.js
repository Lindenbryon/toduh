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

const RenderNavItem = (route, index) => (
    <NavLink key={index} to={route.path} exact={route.exact} className={'navItem'} activeClassName={'active'}>{route.name}</NavLink>
);

const AppRouter = () => (
    <BrowserRouter>
        <div className={'height-100'}>
            <header className={'header'}>
                <div className={'logo'}/>
                <div className={'topNav'}>
                    {routes.map((route, index) => (
                        RenderNavItem(route, index)
                    ))}
                </div>
            </header>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            ))}
        </div>
    </BrowserRouter>
);

export default AppRouter;
