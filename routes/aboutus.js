const express = require('express');
const bodyParser = require('body-parser');

const aboutusRouter = express.Router();

aboutusRouter.route('/')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json('Will send the About Us content to you.');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation is not supported on /aboutus');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /aboutus');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation is not supported on /aboutus');
});

module.exports = aboutusRouter;