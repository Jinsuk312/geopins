const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
	typeDefs,
	resolvers
});
// instatiate server and pass in typedefs/resolvers
new ApolloServer({
	typeDefs: '',
	resolvers: ''
});

server.listen();
