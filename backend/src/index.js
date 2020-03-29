//importa o modulo express para a variavel express
const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');

//armazena a aplicação, criando a aplicação
const app = express(); 

app.use(cors());
//diz que o corpo da requisição será um json (esta linha deve ser colocada antes de todas as requisições)
app.use(express.json());

app.use(routes);

// rota localhost:3333/users
// recurso /users

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o '?'. Servem para filtros, paginação, etc.
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição (criação de usuários)
  *     ex: POST http://localhost:3333/users
  *         Body -> JSON
  *         {
  *             "name" : "Vitória",
  *             "idade" : 20
  *         }
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */

//aplicação vai rodar na porta 3333
app.listen(3333);

