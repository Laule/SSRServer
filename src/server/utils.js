import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import Router from "../Routes";
import React from "react";
import {Provider} from 'react-redux';
import getStore from '../store';
export const render = (req) => {
    const content = renderToString((
        // 使用StaticRouter需要写context属性，它的值是一个对象（用来传递数据）
        // req.path获取到用户请求的路径
        <Provider store={getStore()}>
            <StaticRouter location={req.path} context={{}}>
                {Router}
            </StaticRouter>
        </Provider>
    ));
    return `
    <html>
      <head>
       <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="./index.js"></script>
      </body>    
    </html>
    `
};