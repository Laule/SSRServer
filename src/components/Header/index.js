import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions';
import style from './style.css';
import withStyle from '../../withStyle';
class Header extends Component {
    render() {
        const {isLogin,handleLogin,handleLogout} = this.props;
        return (
            <div className={style.container}>
                <Link className={style["list-item"]} to='/'>首页</Link>
                <Link className={style["list-item"]} to='/details'>详情</Link>
                {
                    isLogin ? <Fragment>
                        <Link className={style["list-item"]} to='/translate'>翻译列表</Link>
                        <div className={style["list-item"]} onClick={handleLogout}>退出</div>
                    </Fragment> : <div className={style["list-item"]} onClick={handleLogin}>登录</div>
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyle(Header,style));
