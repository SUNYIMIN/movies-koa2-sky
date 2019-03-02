const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
   ctx.body = '网站首页'
})
app.listen('5000');