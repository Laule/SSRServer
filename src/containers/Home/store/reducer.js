// 负责初始化创建数据 必须是一个纯函数
const defaultState = {
    name:'Liu Yuan Jin',
    newList: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}