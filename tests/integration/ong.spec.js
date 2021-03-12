import request from 'supertest'
import app from '../../src/app'
import connection from '../../src/database/connection'

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback() //desfaz todas as migrations
        await connection.migrate.latest() //faz que nem o knex no terminald
     })

     afterAll(async () => {
        await connection.destroy()
     })

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs')./*set('Authorization', 'asd) // header */send({
            name: "Crianças felizes",
            email: "contato@email.com",
            whatsapp: "85999999999",
            city: "Fortaleza",
            uf: "CE"
        })
        
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)

    })
})