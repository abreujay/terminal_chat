const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const readline = require('readline');
require('dotenv').config();

const { corsOptions } = require('./configs');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const server = http.createServer(app);
const io = new Server(server);

server.listen(PORT, () => {

    console.log('Servidor online.')

    io.on("connection", (socket) => {

        socket.emit('message', 'Conexão bem sucedida');
    
        socket.on('message', (msg) => {
    
            console.log('@user:', msg);
        
        }); 

        socket.on("disconnect", () => {

            console.log('Usuário Desconectou...')

        })
        
    });

    const rl = readline.createInterface({
    
        input: process.stdin,
        output: process.stdout
    
    });
    
    rl.on('line', (input) => {
    
        console.log('*-*-*');
        io.emit('message', input);
        
    });

});




