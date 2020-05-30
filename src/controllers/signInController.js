const routeUtils = require('../utils/handleResponse');
const statusCode = require('../const/statusCode');
const signInRepository = require('../repositories/signInRepository');

function signIn(req) {
    console.log(111, req.body);
    const { username, password } = req.body;
    return signInRepository.signIn(username, password);
}

module.exports = {
    signIn: routeUtils.handleResponse(signIn, statusCode.OK, statusCode.NOT_FOUND)
};
