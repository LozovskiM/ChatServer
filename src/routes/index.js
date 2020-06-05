const express = require('express');

const signInRoutes = require('./signInRoutes/signInRoutes');
const signUpRoutes = require('./signUpRoutes/signUpRoutes');

const router = express.Router();

router.use('/signin', signInRoutes);
router.use('/signup', signUpRoutes);

module.exports = router;
