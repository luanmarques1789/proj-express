const signIn = (req, res) => {
	res.send('sign-in');
};

const signUp = (req, res) => {
	res.send('sign-up');
};

const list = (req, res) => {
	res.send('LIST');
};

const data = (req, res) => {
	res.send('data');
};

module.exports = {
	signIn,
	signUp,
	list,
	data,
};
