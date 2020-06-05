const routeUtils = require('../utils/handleResponse');
const statusCode = require('../const/statusCode');
const signUpRepository = require('../repositories/signUpRepository');

function signUp(req) {
    console.log(req.body);
    const { username, password } = req.body;
    return signUpRepository.signUp(username, password);
}

module.exports = {
    signUp: routeUtils.handleResponse(signUp, statusCode.CREATED, statusCode.CONFLICT)
};
