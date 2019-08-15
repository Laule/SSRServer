import React, {Component} from 'react';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {getHomeList} from "./store/action";

// 同构： 一套React代码在服务器端执行一次，在客户端执行再执行一次。
class Home extends Component {
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
                <Header/>
                <div>Jia Zhi Yu && {name}</div>
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
        console.log(this.props.list);
        if(!this.props.list.length)
        {
            this.props.getHomeList(false);
        }
    }
}

// 这个函数 负责在服务器端渲染之前，把这个路由需要的数据提前加载好
Home.loadData = (store) => {
    return store.dispatch(getHomeList(true));
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
