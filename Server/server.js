let express = require('express');
let server = express();

server.get("/", (req, res) => {
    res.send('Homepage');
}) //Envio de conteúdo da rota da homepage
server.listen(3000, () => {
    console.log('Servidor funcionando!')
}) //Lançamento do servidor


