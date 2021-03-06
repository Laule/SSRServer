import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getTranslateList} from "./store/action";
import {Redirect} from 'react-router-dom';
import style from './style.css';
import withStyle from '../../withStyle';
import {Helmet} from 'react-helmet';
class Translate extends Component {
    getList() {
        const {list} = this.props;
        return list.map((item) => {
            return <div className={style.test} key={item.id}>{item.nickname}</div>
        })
    }

    render() {
        return this.props.isLogin ? (
            <Fragment>
                <Helmet>
                    <title>翻译页面</title>
                    <meta name="description" content="Helmet application" />
                </Helmet>
                <div>
                    {this.getList()}
                </div>
            </Fragment>
        ) : <Redirect to='/'/>
    }

    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getTranslateList();
        }
    }
}


const mapStateToProps = state => ({
    list: state.translate.list,
    isLogin: state.header.isLogin
});

const mapDispatchToProps = dispatch => ({
    getTranslateList() {
        dispatch(getTranslateList());
    }
});

const ExportTranslate = connect(mapStateToProps, mapDispatchToProps)(withStyle(Translate, style));

ExportTranslate.loadData = (store) => {
    return store.dispatch(getTranslateList());
};

export default ExportTranslate;

