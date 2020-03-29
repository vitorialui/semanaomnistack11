const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// cria cadastro de ONG
routes.post('/ongs', OngController.create);
// lista ONGS
routes.get('/ongs', OngController.index);

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

//cria cadastro de caso
routes.post('/incidents', IncidentController.create);
// lista casos de ONG
routes.get('/incidents', IncidentController.index);
// deleta casos de ONG
routes.delete('/incidents/:id', IncidentController.delete);







//cria a rota de index
routes.get('/user', (request, response) => {
    const params = request.query; // retorna os valores dos query params

    // const params = request.params; //retorna os valores do route params (/users/:id)

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Vitória Lui'
    })
    //return response.send('Hello World');
}); 

routes.post('/user', (request, response) => {
    const body = request.body; // retorna request body

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Vitória Lui'
    })
    //return response.send('Hello World');
});

module.exports = routes;