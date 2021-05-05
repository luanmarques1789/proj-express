const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

/* __dirname é o diretório do projeto atual (proj-express)
	a função join() concatena o __dirname + views */
console.log(path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* A função use() é um middleware
  middlewares são utilizados em autentificações e logins*/
app.use((req, res, next) => {
	console.log('Passou por aqui!');
	/* res.send('Not conection'); */
	next();
});
app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log('Listening on port', port));
