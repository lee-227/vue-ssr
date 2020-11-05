const Vue = require('vue')
const fs = require('fs')
const path = require('path')
const VueServerRenderer = require('vue-server-renderer')
let vm = new Vue({
  data: {
    name: 'lee',
  },
  template: '<h1>{{name}}</h1>',
})
const template = fs.readFileSync(
  path.resolve(__dirname, 'template.html'),
  'utf8'
)
const render = VueServerRenderer.createRenderer({
  template,
})
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
app.use(router.routes())
router.get('/', async (ctx) => {
  ctx.body = await render.renderToString(vm)
})
app.listen(3000)
