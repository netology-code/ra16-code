const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');
const passport = require('koa-passport');
const { Strategy } = require('passport-http-bearer');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const app = new Koa();
app.use(cors());
app.use(koaBody());

const tokens = new Map();
const users = new Map(); 
const rounds = 10;

users.set('vasya', {id: uuid.v4(), login: 'vasya', password: bcrypt.hashSync('password', rounds), avatar: 'https://i.pravatar.cc/50' });

passport.use(new Strategy((token, callback) => {
    const user = tokens.get(token);
    if (user === undefined) {
        return callback(null, false);
    }

    return callback(null, user);
}));
const bearerAuth = passport.authenticate('bearer', { session: false });

const router = new Router();
router.post('/auth', async (ctx, next) => {
    const {login, password} = ctx.request.body; 
    console.log(ctx.request.body);

    const user = users.get(login); 
    if (user === undefined) {
        ctx.response.status = 400;
        ctx.response.body = {message: 'user not found'};
        return;
    }

    const result = await bcrypt.compare(password, user.password);
    if (result === false) {
        ctx.response.status = 400;
        ctx.response.body = {message: 'invalid password'};
        return;
    }

    const token = uuid.v4();
    tokens.set(token, user);
    ctx.response.body = {token, profile: {id: user.id, login: user.login, avatar: user.avatar}};
});
router.use('/private**', bearerAuth);
router.get('/private', async (ctx, next) => {
    ctx.response.body = {message: 'ok'};
});

app.use(router.routes())
app.use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port);