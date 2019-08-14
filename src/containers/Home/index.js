import React, {Component} from 'react';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {getHomeList} from "./store/action";

// 同构： 一套React代码在服务器端执行一次，在客户端执行再执行一次。
class Home extends Component {
    render() {
        const {name} = this.props;
        return (
            <div>
                <Header/>
                <div>Jia Zhi Yu && {name}</div>
                <button onClick={() => {
                    alert('hello')
                }}>
                    click me !
                </button>
            </div>
        )
    }

    componentDidMount() {
        this.props.getHomeList();
    }
}

const mapStateToProps = state => ({
    name: state.home.name
});
const mapDispatchToProps = dispatch => ({
    getHomeList(){
        dispatch(getHomeList());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
