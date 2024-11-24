const io = require('socket.io-client');
const socket = io('http://192.168.1.9:3000');
const readline = require('readline');

socket.on("connect", () => {

    socket.emit("message", 'Conexão bem sucedida.');

    socket.on("message", (msg) => {

        console.log('@mage:', msg);

    });

});

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

rl.on('line', (input) => {

    socket.emit("message", input);

});