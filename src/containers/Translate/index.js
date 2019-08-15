import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTranslateList} from "./store/action";
import {Redirect} from 'react-router-dom';

class Translate extends Component {
    getList() {
        const {list} = this.props;
        return list.map((item) => {
            return <div key={item.id}>{item.nickname}</div>
        })
    }

    render() {
        return this.props.isLogin ? (
            <div>
                {this.getList()}
            </div>
        ) : <Redirect to='/'/>
    }

    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getTranslateList();
        }
    }
}

Translate.loadData = (store) => {
    return store.dispatch(getTranslateList());
};
const mapStateToProps = state => ({
    list: state.translate.list,
    isLogin: state.header.isLogin
});

const mapDispatchToProps = dispatch => ({
    getTranslateList() {
        dispatch(getTranslateList());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Translate);

