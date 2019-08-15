import *  as actionTypes from './contants';

const changeLoginStatus = (value) => ({
    type: actionTypes.CHANGE_LOGIN_STATUS,
    value
});


export const login = () => {
    return (dispatch,getState,axiosInstance) => {
        return axiosInstance.get('/api/login.json').then((res) => {
            dispatch(changeLoginStatus(res.data.data.login));
        }).catch(()=>{
            console.log('http请求错误');
        });
    }
};
export const logout = () => {
    return (dispatch,getState,axiosInstance) => {
        return axiosInstance.get('/api/isLogin.json').then((res) => {
            dispatch(changeLoginStatus(res.data.data.login));
        }).catch(()=>{
            console.log('http请求错误');
        });
    }
};
export const getHeaderInfo = () => {
    return (dispatch,getState,axiosInstance) => {
        return axiosInstance.get('/api/isLogin.json').then((res) => {
            dispatch(changeLoginStatus(res.data.data.login));
        }).catch(()=>{
            console.log('http请求错误');
        });
    }
};