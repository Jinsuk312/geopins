// execute me resolver function
const user = {
	_id: '1',
	name: 'Justin',
	email: 'jinsukdev@gmail.com',
	picture: 'https://cloudinary.com/asdf'
};
module.exports = {
	Query: {
		me: () => user
	}
};
