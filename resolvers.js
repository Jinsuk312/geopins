const { AuthenticationError } = require('apollo-server');
// execute me resolver function
const user = {
	_id: '1',
	name: 'Justin',
	email: 'jinsukdev@gmail.com',
	picture: 'https://cloudinary.com/asdf'
};

const authenticated = next => (root, args, ctx, info) => {
	if (!ctx.currentUser) {
		throw new AuthenticationError('You must be logged in');
	}
	return next(root, args, ctx, info);
};
module.exports = {
	Query: {
		me: authenticated((root, args, ctx) => ctx.currentUser)
	}
};
