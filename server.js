const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema.js')

const app = express();

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue: global,
    graphiql:true
}))

var port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log('Server is running on port ' + port + '..');
});