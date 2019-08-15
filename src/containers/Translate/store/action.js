import *  as actionTypes from './contants';

const changeTranslateList = (list) => ({
    type: actionTypes.CHANGE_TRANSLATE_LIST,
    list
});


export const getTranslateList = () => {
    return (dispatch,getState,axiosInstance) => {
        return axiosInstance.get('/api/writer.json').then((res) => {
            const result = res.data.users;
            console.log(result);
            dispatch(changeTranslateList(result));
        }).catch(()=>{
            console.log('http请求错误');
        });
    }
};