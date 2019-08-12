
const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const app = new Koa();

app.use(cors());

app.use(koaBody({
  text: true,
  urlencoded: true,
  multipart: true,
  json: true,
}));

const currencies = [{ "value": 1, "title": "Российский рубль", "code": "RUR" }, { "value": 44.1679, "title": "Австралийский доллар", "code": "AUD" }, { "value": 37.6061, "title": "Азербайджанский манат", "code": "AZN" }, { "value": 79.5507, "title": "Фунт стерлингов Соединенного королевства", "code": "GBP" }, { "value": 1337.5, "title": "Армянских драмов", "code": "AMD" }, { "value": 31.1959, "title": "Белорусский рубль", "code": "BYN" }, { "value": 36.6134, "title": "Болгарский лев", "code": "BGN" }, { "value": 16.7869, "title": "Бразильский реал", "code": "BRL" }, { "value": 2197, "title": "Венгерских форинтов", "code": "HUF" }, { "value": 816.4780000000001, "title": "Гонконгских долларов", "code": "HKD" }, { "value": 959.51, "title": "Датских крон", "code": "DKK" }, { "value": 63.7988, "title": "Доллар США", "code": "USD" }, { "value": 71.5631, "title": "Евро", "code": "EUR" }, { "value": 9305.54, "title": "Индийских рупий", "code": "INR" }, { "value": 1659.5900000000001, "title": "Казахстанских тенге", "code": "KZT" }, { "value": 48.616, "title": "Канадский доллар", "code": "CAD" }, { "value": 9140.23, "title": "Киргизских сомов", "code": "KGS" }, { "value": 927.2, "title": "Китайских юаней", "code": "CNY" }, { "value": 356.916, "title": "Молдавских леев", "code": "MDL" }, { "value": 737.9340000000001, "title": "Норвежских крон", "code": "NOK" }, { "value": 16.7649, "title": "Польский злотый", "code": "PLN" }, { "value": 15.1372, "title": "Галактический кредит", "code": "ZZZ" }, { "value": 88.0289, "title": "СДР (специальные права заимствования)", "code": "XDR" }, { "value": 46.8764, "title": "Сингапурский доллар", "code": "SGD" }, { "value": 676.551, "title": "Таджикских сомони", "code": "TJS" }, { "value": 11.102, "title": "Турецкая лира", "code": "TRY" }, { "value": 18.2543, "title": "Новый туркменский манат", "code": "TMT" }, { "value": 743935, "title": "Узбекских сумов", "code": "UZS" }, { "value": 248.631, "title": "Украинских гривен", "code": "UAH" }, { "value": 280.04, "title": "Чешских крон", "code": "CZK" }, { "value": 674.442, "title": "Шведских крон", "code": "SEK" }, { "value": 64.3587, "title": "Швейцарский франк", "code": "CHF" }, { "value": 449.579, "title": "Южноафриканских рэндов", "code": "ZAR" }, { "value": 54029.7, "title": "Вон Республики Корея", "code": "KRW" }, { "value": 5857.67, "title": "Японских иен", "code": "JPY" }];

const router = new Router();

router.get('/currency', async (ctx, next) => {
  ctx.response.body = currencies;
});

app.use(router.routes())
app.use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port);
