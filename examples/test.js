var koa = require('koa');
var request = require('../index'); //koa2-request

var app = new koa();

app.use(async(ctx, next) => {
	// request选项
	var res = await request('http://www.baidu.com');
	ctx.body = res.body;
});

app.listen(8080, () => {
	console.log('server is listener on port 8080')
});