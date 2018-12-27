const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');


authRouter.post('/signin', authController.signIn);
authRouter.post('/signup', authController.signUp);

module.exports = authRouter;



/*
api.post('/signup', validate({body: GenericSchema}), GenericController.signUp);

*/