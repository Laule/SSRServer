import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getHomeList} from "./store/action";
import style from './style.css';

// 同构： 一套React代码在服务器端执行一次，在客户端执行再执行一次。
class Home extends Component {
    constructor(props) {
        super(props);
        // console.log(style);
        if (this.props.staticContext) {
            this.props.staticContext.css = style._getCss();
        }
    }

    getList() {
        const {list} = this.props;
        return list.map((item) => {
            return <div key={item.id}>{item.title}</div>
        })
    }

    render() {
        const {name} = this.props;
        return (
            <div>
                <div className={style.test}>Jia Zhi Yu && {name}</div>
                {this.getList()}
                <button onClick={() => {
                    alert('hello');
                }}>
                    click me !
                </button>
            </div>
        )
    }

    //在服务端不执行
    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getHomeList();
        }
    }
}

// 这个函数 负责在服务器端渲染之前，把这个路由需要的数据提前加载好
Home.loadData = (store) => {
    return store.dispatch(getHomeList());
};

const mapStateToProps = state => ({
    list: state.home.newList,
    name: state.home.name
});
const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
