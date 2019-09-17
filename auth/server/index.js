const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const cors = require('cors');

mongoose.connect('mongodb://localhost:auth/auth', {useNewUrlParser: true});
//APP Setup
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
app.use(cors())
// app.use(cookieSession({
//     name: 'session',
//     secret: 'mykey',
//     maxAge: 24*60*60*1000
// }));
router(app)

//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('SERVER LISTENIGN ON PORT:' + port);

