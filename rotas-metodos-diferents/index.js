const express = require('express');
const app = express();

app.get('/users/:name', (req, res) => {
    const name = req.params.name;
    res.send(`este é o perfil do usuário ${name}`);
});

app.put('/users/:name', (req, res) => {
    const name = req.params.name;
    res.send(`este é o perfil do usuário ${name} usando o PUT`);
});


app.listen(3000, () => {
    console.log('Servidor em execução em http://localhost:3000');
})