import *  as actionTypes from './contants';

const changeHomeList = (list) => ({
    type: actionTypes.GET_HOME_LIST,
    list
});


export const getHomeList = () => {
    return (dispatch,getState,axiosInstance) => {
        return axiosInstance.get('/api/homeList.json').then((res) => {
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