const express = require('express')
const { createServer } = require('node:http');
const { join } = require('node:path')
const { Server } = require('socket.io')
const basicAuth = require('express-basic-auth');

const app = express()
const server = createServer(app)
const io = new Server(server, {
    connectionStateRecovery: {}
})

app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, "js")));
app.use("/asset", express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'))
});

app.get('/panggung', (req, res) => {
    res.sendFile(join(__dirname, 'panggung.html'))
});

app.get('/panggung1', (req, res) => {
    res.sendFile(join(__dirname, 'panggung1.html'))
});

app.get('/panggung2', (req, res) => {
    res.sendFile(join(__dirname, 'panggung2.html'))
});

app.use('/manual', basicAuth({
    users: { 'antoni': 'antoni' },
    challenge: true,
    unauthorizedResponse: 'Unauthorized Access',
}));

app.get('/manual', (req, res) => {
    res.sendFile(join(__dirname, 'manual.html'))
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected')
    });
    socket.on('chat message', (msg) => {
        console.log('message', msg)
        io.emit('chat message', msg)
    })
    socket.broadcast.emit('hi')
})

server.listen(3000, () => {
    console.log('server running')
})