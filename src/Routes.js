import React from 'react';
import App from './App';
import Home from './containers/Home';
import Login from './containers/Login';
import Details from './containers/Details';
import Translate from './containers/Translate';
import NotFound from './containers/NotFound';

export default [
    {
    path: '/',
    component: App,
    loadData:App.loadData,
    routes: [
        {
            path: '/',
            key: 'home',
            component: Home,
            exact: true,
            loadData: Home.loadData
        }, {
            path: '/login',
            key: 'login',
            component: Login,
            exact: true
        },{
            path: '/details',
            exact: true,
            key: 'details',
            component: Details
        },{
            path: '/translate',
            exact: true,
            key: 'translate',
            component: Translate,
            loadData: Translate.loadData
        },
        {
            component:NotFound
        }
    ]
}];