const Vue = require('vue')
const VueServerRender = require('vue-server-renderer')
const Koa = require('koa')
const Router = require('koa-router')
const Static = require('koa-static')
const path = require('path')
const fs = require('fs')
let bundle = fs.readFileSync(
  path.resolve(__dirname, './dist/server.bundle.js'),
  'utf8'
)
let template = fs.readFileSync(
  path.resolve(__dirname, './dist/index.ssr.html'),
  'utf8'
)
const render = VueServerRender.createBundleRenderer(bundle, { template })
const app = new Koa()
const router = new Router()
app.use(router.routes())
app.use(Static(path.resolve(__dirname, './dist')))
router.get('/', async (ctx) => {
  ctx.body = await new Promise((resolve) => {
    render.renderToString((err, html) => {
      resolve(html)
    })
  })
})
app.listen(3000)
