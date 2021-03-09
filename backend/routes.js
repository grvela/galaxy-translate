const express = require('express');

const api = require('./services/api.translate');

const app = express();

app.post('/:language', async (request, response) => {
    
    const language = request.params.language;
    const data = request.body;

    const translation = await api.translate(data, language);

    return response.json(translation);
});


module.exports = app;