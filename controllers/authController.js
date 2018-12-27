const Client = require('../db/models/client');
const Sequelize = require('sequelize');
const { checkHash } = require('../services/index');
module.exports = {
    signIn: async (req, res) => {	

        const newClient = Client.build({
            username: req.body.username,
            password: req.body.password,
            token: req.body.password,
            createdAt: Sequelize.literal('NOW()')
        });
        
        console.log(newClient.username)

        let data = await newClient.save();
        res.status(200).send(data);
        return;
    },
    signUp: async (req, res) => {
        let user = await Client.findOne({ where: {username: req.body.username} })

        if (!user || checkHash(req.body.password, user.password) ) {
            res.status(404).send({message: 'err'});
        }

        res.status(200).send(user);

    }
};