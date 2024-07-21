const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);

const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/webSocket/index.html');
});

io.on('connection', (socket) => {
    console.log('Connection established');

    socket.on('chat message', (msg) => {
        console.log('received message', msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User Disconnected!');
    });
});

const port = process.env.PORT || 5011;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

