const express = require('express')
const app = express()

app.get('/', (req, res) => res.send(`
<html>
<head>
<title>SSR</title>
</head>
<body>
<h1>俺要好好学习服务端渲染啦！</h1>
</body>
</html>
`));

app.listen(3000, () => console.log('Example app listening on port 3000!'));