#koa2-request
===========

支持koa2 async和await写法

安装
```bash
npm install koa2-request
```

```js
let koa = require('koa');
let request = require('koa2-request');
let result = await request({
    url: dubboConf.url + `/user/findByUnameNPwd`,
    method: 'post',
    headers: {
        'content-type': 'application/json',
        'charset': 'UTF-8'
    },
    json: true,
    body: {
        username: uname, pwd: pwd
    }
});
console.log(result.body);

```
