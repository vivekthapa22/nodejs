const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const postsRoute = require('./routes/posts');
app.use(bodyParser.json());
app.use("/posts", postsRoute);

module.exports = app;