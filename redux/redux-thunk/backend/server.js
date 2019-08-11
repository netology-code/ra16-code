const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();
app.use(cors());
app.use(koaBody({json: true}));

let nextId = 1;
const services = [
    { id: nextId++, name: 'Замена стекла', price: 21000, },
    { id: nextId++, name: 'Замена дисплея', price: 25000, },
    { id: nextId++, name: 'Замена аккумулятора', price: 4000, },
    { id: nextId++, name: 'Замена микрофона', price: 2500, },
];

const router = new Router();

router.get('/api/services', async (ctx, next) => {
    ctx.response.body = services;
});

router.post('/api/services', async (ctx, next) => {
    const id = nextId++;
    services.push({...ctx.request.body, id});
    ctx.response.status = 204;
});

router.delete('/api/services/:id', async (ctx, next) => {
    const id = Number(ctx.params.id);
    const index = services.findIndex(o => o.id === id);
    if (index === -1) {
        ctx.response.status = 404;
        return;
    }
    services.splice(index, 1);
    ctx.response.status = 204;
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());

server.listen(port);
