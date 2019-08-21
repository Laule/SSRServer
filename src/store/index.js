import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import clientAxios from '../client/request';
import serverAxios from '../server/request';
import reducer from './reducer';

export const getStore = (req) => {
    // 改变服务器端的store的内容 就使用serverAxios
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
};

export const getClientStore = () => {
    const defaultState = window.context.state;
    return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};