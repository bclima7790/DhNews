const express = require('express');
const server = express();
const path = require('path');


server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'../Public/index.html'));
}) //Envio de conteúdo da rota da homepage

server.listen(3000, () => {
    console.log('Servidor funcionando!');
}) //Lançamento do servidor


