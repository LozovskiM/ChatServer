const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const customError = require('../const/customError');
const JWT = require('../const/JWT');

class SignInRepository {
    async signIn(username, password) {
        try {
            if (!username || !password) {
                throw new customError('You must provide username and password');
            }

            const user = await User.findOne({ email: username });

            if (!user) {
                throw new customError('Incorrect username or password');
            }

            if (user.password !== password) {
                throw new customError('Incorrect username or password');
            }

            const token = jwt.sign({ id: user._id }, JWT.secret, { expiresIn: JWT.live });

            return {
                data: {
                    token
                }
            };

        } catch (err) {
            throw err;
        }
    }
}

module.exports = new SignInRepository();
