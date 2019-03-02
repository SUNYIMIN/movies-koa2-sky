const Koa = require('koa');
const app = new Koa();
const normal = require('./tpl/normal.js');
app.use(async (ctx) => {
   ctx.type = 'text/html; charset=utf-8';
   ctx.body = normal;
})
app.listen('5000');