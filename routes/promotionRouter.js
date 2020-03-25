const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json('Will send all the promotions to you.');
})
.post((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`Will add the promotion ${req.body.name} with the description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /promotions');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation is not supported on /promotions');
});

promotionRouter.route('/:promotionId')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`Will send the promotion #${req.params.promotionId} to you.`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation is not supported on /promotions/${req.params.promotionId}.`);
})
.put((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content_Type', 'application/json');
    res.json(`Updating the promotion #${req.params.promotionId}`);
})
.delete((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`Deleting promotion #${req.params.promotionId}`);
});

module.exports = promotionRouter;