const express = require('express');
const app = express();

const port = 3000;

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

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
