const Dev = require('../models/Dev');
const axios = require('axios');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async destroy(req, res) {

        const { _id } = req.params;

        const log = await Dev.deleteOne({ _id });

        return res.json({ message: 'Dev deleted', log });

    },

    async index(req, res) {

        const devs = await Dev.find();

        return res.json(devs);

    },

    async store(req, res) {

        const { github_username, techs, longitude, latitude } = req.body;

        const devFind = await Dev.findOne({ github_username });

        if(devFind) return res.json(devFind);

        const response = await axios.get(`https://api.github.com/users/${ github_username }`);

        const { name = login, avatar_url, bio } = response.data;

        const techsArray = parseStringAsArray(techs);

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        };

        const dev = await Dev.create({
            name,
            github_username,
            bio,
            avatar_url,
            techs: techsArray,
            location
        });

        return res.json(dev);

    }

};
