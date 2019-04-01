const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const schema = require('./schema');

const server = express();

// Allow cross-origin
// Allows to make requests from different domains
server.use(cors());

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

// If we deploy, it will listen to the process.env.PORT
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port${PORT}`));