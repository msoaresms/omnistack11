const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs)
    },

    async create(request, response) {
        const data = request.body;
        data.id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert(data);

        return response.json({ id: data.id });
    }
}