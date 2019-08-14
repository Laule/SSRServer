import {renderToString} from "react-dom/server";
import {StaticRouter,Route,matchPath} from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import React from "react";
import routes from "../Routes";
import {Provider} from 'react-redux';
import getStore from '../store';

export const render = (req) => {
    const store = getStore();
    // 拿到异步数据，并填充到store之中
    //  根据路由地址，往store填充数据
    const matchedRoutes = matchRoutes(routes,req.path);
    // 让matchRoutes里面的所有组件，对应的loadData方法执行一次

    const content = renderToString((
        // 使用StaticRouter需要写context属性，它的值是一个对象（用来传递数据）
        // req.path获取到用户请求的路径
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    {routes.map(route => (
                        <Route {...route} />
                    ))}
                </div>
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