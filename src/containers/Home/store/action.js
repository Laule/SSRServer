
import *  as actionTypes from './contants';
import axios from 'axios'

const changeHomeList = (list) => ({
    type: actionTypes.GET_HOME_LIST,
    list
});


export const getHomeList = () =>{
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) => {
            const result = res.data.data;
            console.log(res);
            dispatch(changeHomeList(result));
        })
    }
};