const User = require('../models/user.model.js');

// function create new user
exports.create = (req, res) => {
	if(!req.body.firstName) {
		return res.status(400).send({
			message: "Note content can not be empty"
		});
	}

	// attribute initialisation
	const user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		birth: req.body.birth,
		mail: req.body.mail,
		code: req.body.code
	});

	// inserting filled object in DB
	user.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Note."
		});
	});
};

// get all user
exports.findAll = (req, res) => {
	User.find({})
	.then(users => {
		res.send(users);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving notes."
		});
	});
};
