const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const path = require('path');
const schema = require('./schema');

const server = express();

// Allow cross-origin
// Allows to make requests from different domains
server.use(cors());

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

// Setting static folder
/**
 * Whenever any route exept the '/graphql' is hit
 * it's gonna redirect index.html page which
 * will be in the publick folder.
 */ 
server.use(express.static('public'));

server.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, 'public', 'index.html'))
});
// If we deploy, it will listen to the process.env.PORT
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port${PORT}`));