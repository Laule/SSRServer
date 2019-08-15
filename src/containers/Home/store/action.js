import *  as actionTypes from './contants';
import axios from 'axios'

const changeHomeList = (list) => ({
    type: actionTypes.GET_HOME_LIST,
    list
});


export const getHomeList = (server) => {
    let url = '';
    if (server) {
        url = 'http://localhost:3000/api/homeList.json'
    } else {
        url = '/api/homeList.json'
    }
    return (dispatch) => {
        return axios.get('http://localhost:3000/api/homeList.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeList(result));
        }).catch(() => {
            console.log('http请求错误');
        });
    }
};