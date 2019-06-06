const getMessage = require('../config/chatbot').getMessage;

exports.ask = (req, res, next) => {
    return getMessage(req.body)
    .then(data => {
        res.status(200);
        res.json(data.output.text);
    }).catch(next);
};
