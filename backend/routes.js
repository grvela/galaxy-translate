const express = require('express');

const api = require('./services/api.translate');

const app = express();

app.post('/:language', (request, response) => {
    
    const language = request.params.language;
    const data = request.body;

    return response.json(data);
});


module.exports = app;