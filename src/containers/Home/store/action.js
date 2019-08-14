
import *  as actionTypes from './contants';
import axios from 'axios'

const changeHomeList = (value) => ({
    type: actionTypes.GET_HOME_LIST,
    value
});


export const getHomeList = () =>{
    return (dispatch) => {
        axios.get('/api/tsconfig.json').then((res) => {
            console.log(res);
            // dispatch(changeHomeList(result));
        })
    }
};