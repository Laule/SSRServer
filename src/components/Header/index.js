import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions';
class Header extends Component {
    render() {
        const {isLogin,handleLogin,handleLogout} = this.props;
        return (
            <div>
                <Link to='/'>首页</Link>
                <br/>
                {
                    isLogin ? <Fragment>
                        <div onClick={handleLogout}>退出</div><br/>
                        <Link to='/translate'>翻译列表</Link>
                    </Fragment> : <div onClick={handleLogin}>登录</div>
                }
                <br/>
                <Link to='/details'>详情</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.header.isLogin
});
const mapDispatchToProps = (dispatch) => ({
    handleLogin() {
        dispatch(actions.login());
    },
    handleLogout() {
        dispatch(actions.logout());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
