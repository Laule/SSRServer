import *  as actionTypes from './contants';
import axios from 'axios'
import clientAxios from '../../../client/request';
import serverAxios from '../../../server/request';

const changeHomeList = (list) => ({
    type: actionTypes.GET_HOME_LIST,
    list
});


export const getHomeList = (server) => {
    const request = server ? serverAxios : clientAxios;
    return (dispatch) => {
        return request.get('api/homeList.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeList(result));
        }).catch(()=>{
            console.log('http请求错误');
        });
        // return axios.get('http://localhost:3000/api/homeList.json').then((res) => {
        //     const result = res.data.data;
        //     dispatch(changeHomeList(result));
        // }).catch(() => {
        //     console.log('http请求错误');
        // });
    }
};