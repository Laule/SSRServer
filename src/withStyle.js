import React, {Component} from 'react';
import style from "./containers/Home/style.css";
// 这个函数，是生成高阶组件的函数
// 这个函数返回一个组件
export default (DecoratedComponent, style) => {
    //返回这个组件,叫做高阶组件
    return class NewComponent extends Component {
        constructor(props) {
            super(props);
            if (this.props.staticContext) {
                this.props.staticContext.css.push(style._getCss());
            }
        }
        render() {
            return <DecoratedComponent {...this.props} />
        }
    }
}