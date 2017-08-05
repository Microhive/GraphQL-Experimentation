const express = require('express');
const expressGraphQl = require('express-graphql')
const schema = require('./schema.js')

const app = express();

app.use('/graphql', expressGraphQl({
    schema:schema,
    graphiql:true
}))

var port = process.env.port || 4001;
app.listen(port, () => {
    console.log('Server is running on port' + port + '..');
});