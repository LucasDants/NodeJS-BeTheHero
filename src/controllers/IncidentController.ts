import { Request, Response } from 'express'
import connection from '../database/connection'

interface CountProps {
    'count(*)': string
}

export default {
    async index(request: Request, response: Response) {
        const { page = 1 } = request.query

        const [count] = await connection('incidents').count() as CountProps[]

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id ')
        //.limit(5)
        //.offset((Number(page) - 1) * 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])
        
        response.header('X-Total-Count', count['count(*)'])

        return response.json(incidents)
    },
    async create(request: Request, response: Response) {
        const { title, description, value } = request.body
        const ong_id = request.headers.authorization

       const [ id ] =  await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })
        
        return response.json({ id })
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params
        const ong_id = request.headers.authorization
        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first()
        if(incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.'})
        }

        await connection('incidents').where('id', id).delete()
        return response.status(204).send();
    }
}