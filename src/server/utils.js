import {renderToString} from "react-dom/server";
import {Route, StaticRouter} from "react-router-dom";
import React from "react";
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';

export const render = (store,routes,req) => {
    const content = renderToString((
        // 使用StaticRouter需要写context属性，它的值是一个对象（用来传递数据）
        // req.path获取到用户请求的路径
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    {renderRoutes(routes)}
                </div>
            </StaticRouter>
        </Provider>
    ));
    return`
    <html> 
      <head>
       <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
        window.context = {
            state: ${JSON.stringify(store.getState())}
        }
        </script>
        <script src="./index.js"></script>
      </body>    
    </html>
    `;
};