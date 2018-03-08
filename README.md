koa2-request
===========

> koa2的request库封装，支持async和await写法

## 安装

```bash
npm install koa2-request
```

## 使用方法

```javascript

var koa2Req = require('koa2-request');

app.use(async(ctx, next) => {
	// request选项
	var res = await koa2Req('http://www.baidu.com');
	ctx.body = res.body;
});
```