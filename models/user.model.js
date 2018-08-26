const mongoose = require('mongoose');

// Define Schema for user Model
const UserSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	birth: String,
	mail: String,
	code: Number
}, {
	timestamps: true
});
module.exports = mongoose.model('User', UserSchema);
