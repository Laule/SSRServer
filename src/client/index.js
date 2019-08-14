import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Router from '../Routes';
import getStore from '../store';
import {Provider} from 'react-redux';
const App = () => {
    return (
        <Provider store={getStore()}>
            <BrowserRouter>
                {Router}
            </BrowserRouter>
        </Provider>
    )
};

ReactDom.hydrate(<App/>, document.getElementById('root'));