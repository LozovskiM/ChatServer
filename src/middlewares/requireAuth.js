const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.body;

    if (!authorization) {
        return res.status(401).send('You must be logged in.');
    }

    const token = authorization.replace('Bearer', '');

    jwt.verify(token, 'MY_SECRET_KEY', (err, payload) => {
        if (err) {
            return res.status(401).send('You must be logged in.');
        }

        next();
    })
};
