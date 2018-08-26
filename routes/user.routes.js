module.exports = (app) => {
	const users = require('../controllers/user.ctrl.js');

	// creating new user
	app.post('/user_create', users.create);
	console.log("routes");

	// getting all users
	app.get('/user', users.findAll);
}
