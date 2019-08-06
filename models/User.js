const mongoose = require('mongoose');
// no _id because its automatically created when we generated new entries
const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	picture: String
});

module.exports = mongoose.model('User', UserSchema);
