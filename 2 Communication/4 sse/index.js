const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');

const app = express();
const server = createServer(app);

app.get('/sse', (req, res) => {
    //setup sse logic
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Cache-Control', 'no-cache');

    res.write('data: welcome to server sent event \n\n');


    const intevalId = setInterval(() => {
        res.write(`data: Server Time ${new Date().toLocaleDateString()} \n\n`)
    }, 5000);

    req.on('close', () => {
        clearInterval(intevalId);
    })
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/sse/index.html');
});


const port = process.env.PORT || 5011;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

