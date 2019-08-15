import React, {Component} from 'react';

class NotFound extends Component {
    constructor(props){
        super(props);
        const {staticContext} = this.props;
        // 短路特性 staticContext存在才执行
        staticContext && (staticContext.NotFound = true);
    }

    render() {
        return (
            <div>
                404, 页面走丢了噢~
            </div>
        )
    }
}

export default NotFound;
