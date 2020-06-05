require('./models/User');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const io = require('socket.io')(3020);

const routes = require('./routes/index');

const app = express();
app.use(bodyParser());
app.use(cors());
app.use('/', routes);


io.on('connection', socket => {
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('send-chat-message',message);
    });
});

const mongoUri = 'mongodb+srv://nik:1111@cluster0-uzqgh.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connect to mongo db success!');
});

mongoose.connection.on('error', () => {
    console.log('Connection to mongo db error!');
});

const port = 3030;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
