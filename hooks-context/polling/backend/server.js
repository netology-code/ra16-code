const http = require('http');                                                                                                                                                                                                                                                        
const Koa = require('koa');                                                                                                                                                                                                                                                          
const Router = require('koa-router');                                                                                                                                                                                                                                                
const cors = require('koa2-cors');                                                                                                                                                                                                                                                   
const faker = require('faker');

const app = new Koa();                                                                                                                                                                                                                                                               
app.use(cors());                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                    
let nextId = 1;
const latestCount = 3;
const news = [
    {id: nextId++, content: faker.lorem.sentence()},
    {id: nextId++, content: faker.lorem.sentence()},
    {id: nextId++, content: faker.lorem.sentence()},
];

setInterval(() => {
    news.push({id: nextId++, content: faker.lorem.sentence()});
}, 1 * 1000);
                                                                                                                                                                                                                                                                                    
const router = new Router();                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                    
let isEven = true;
router.get('/news/latest', async (ctx, next) => {                                                                                                                                                                                                                                     
    return new Promise(resolve => {
        const response = news.slice(news.length - latestCount, news.length).reverse()
        setTimeout(() => {
            ctx.response.body = response;                                                                                                                                                                                                                                                    
            resolve();
        }, isEven ? 10 * 1000 : 20 * 1000);
        isEven = !isEven;
    })
});                                                                                                                                                                                                                                                                                  

                                                                                                                                                                                                                                                                                    
app.use(router.routes()).use(router.allowedMethods());                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                    
const port = process.env.PORT || 7070;                                                                                                                                                                                                                                               
const server = http.createServer(app.callback());                                                                                                                                                                                                                                    
server.listen(port);