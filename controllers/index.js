const user = (req, res) => {
	res.sendStatus('USER');
};

const about = (req, res) => {
	res.sendStatus('ABOUT');
};

const calc = (req, res) => {
	console.log(req.query);
	if (req.query.num1 && req.query.num2) {
		// destructing assignment
		const { num1, num2 } = req.query;
		const sum = parseInt(num1) + parseInt(num2);
		// O parâmetro da função send() somente aceita string
		res.send(`O resultado é ${sum}`);
	} else {
		res.send('calculadora');
	}
};

const pair = (req, res) => {
	// query params
	const { num } = req.params;
	const isPair = num % 2 == 0;

	if (isPair) {
		res.send(`${num} is pair!`);
		console.dir('Pair');
	} else {
		res.send(`${num} isn't pair!`);
		console.dir('Odd');
	}
};

const def = (req, res) => {
	res.send('default');
};

module.exports = {
	user,
	about,
	calc,
	pair,
	def,
};
