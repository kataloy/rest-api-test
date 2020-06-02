const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const handleError = require('./middlewares/handleError');
const { auth, films, favorites, } = require('./services');

const PORT = 8080;

const app = new Koa();
const router = new Router({ prefix: '/api' });

app.on('error', console.error);

auth(router);
films(router);
favorites(router);

app.use(bodyParser());
app.use(handleError);
app.use(router.routes());

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})
