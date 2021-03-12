import express from 'express'
import cors from 'cors'
import { errors } from 'celebrate'
import routes from './routes'


const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

export default app

/*
    Métodos HTTP:
    
    GET: Buscar/listar informação no back
    POST: Criar
    Put: Alterar
    Delete
*/

/*
    Parâmetros:

    Query: parâmetros nomeados enviados na rota após '?', serve para filtros, paginação
    Route Params: Parâmetros utilizados para identificar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
 SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 NoSQL: MongoDB, CouchDB...
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() Knex
 */

