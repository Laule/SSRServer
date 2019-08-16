import {renderToString} from "react-dom/server";
import {Route, StaticRouter} from "react-router-dom";
import React from "react";
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import {Helmet} from "react-helmet";

export const render = (store, routes, req, context) => {
    const content = renderToString((
        // 使用StaticRouter需要写context属性，它的值是一个对象（用来传递数据）
        // req.path获取到用户请求的路径
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>
                    {renderRoutes(routes)}
                </div>
            </StaticRouter>
        </Provider>
    ));
    const helmet = Helmet.renderStatic();

    // console.log(context.css);
    const cssStr = context.css.length ? context.css.join('\n') : '';
    // console.log(cssStr);
    return `
    <html> 
      <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
       <style>${cssStr}</style>
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