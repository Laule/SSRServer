import express from 'express';
import {render} from './utils';
import {getStore} from "../store";
import {matchRoutes} from "react-router-config";
import proxy from 'express-http-proxy';
import routes from "../Routes";

const app = express();
app.use(express.static('public'));

// 这一块需要改成真实服务器地址，模拟数据在 public/api/下
app.use('/api', proxy('http://localhost:3000', {
    proxyReqPathResolver: function (req) {
        console.log(req.url);
        // 拼接返回一个新的请求地址
        // return '/api' + req.url;
    }
}));

app.get('*', function (req, res) {
    const store = getStore(req);
    // 拿到异步数据，并填充到store之中
    // 根据路由地址，往store填充数据
    const matchedRoutes = matchRoutes(routes, req.path);
    // 让matchRoutes里面的所有组件，对应的loadData方法执行一次
    const promises = [];
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            promises.push(item.route.loadData(store));
        }
    });
    console.log(promises);
    //等待所有的promise执行完，再执行下面的代码
    Promise.all(promises).then(() => {
        const context = {};
        const html = render(store, routes, req, context);
        console.log(html);
        if (context.NotFound) {
            res.status(404);
            res.send(html);
        } else {
            res.send(html);
        }
        console.log(context);
        // console.log(store.getState());
    });
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));