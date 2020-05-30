const express = require('express');
const signUpController = require('../../controllers/signUpController');

const router = express.Router();

router.route('/')
    .post(signUpController.signUp);

module.exports = router;
