const express = require('express');
const app = express();

//middleare para autenticação
app.use((req, res, next) => {
    const isLogged = false;

    if (isLogged) {
        next()
    } else {
        res.status(401).send('Precisa estar logado para acessar essa página!')
    }
})

app.get('/', (req, res) => {
    res.send('Olá mundo!')
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta http://localhost:3000');
})