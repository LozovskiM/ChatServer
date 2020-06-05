const statusCode = require('../const/statusCode');
const CustomError = require('../const/customError');

function errorHandler(err, req, res) {
    return res.status(err.statusCode || statusCode.SERVER_ERROR).send({ message: err.message });
}

function handleResponse(handler, statusRes, statusErr) {
    return async (req, res) => {
        try {
            const data = await handler(req, res);
            return res.status(statusRes).json(data);
        } catch (err) {
            console.log('Error!', err.message);
            if (err instanceof CustomError) {
                console.log('Error message:', err.message);
                return res.status(statusErr).json({ message: err.message });
            }

            errorHandler(err, req, res);
            //res.status(err.statusCode || statusCode.SERVER_ERROR || statusErr).json({ message: err.message });
        }
    }
}

module.exports = {
    handleResponse
};

