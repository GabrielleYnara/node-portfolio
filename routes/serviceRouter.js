const express = require('express');
const bodyParser = require('body-parser');

const serviceRouter = express.Router();

serviceRouter.use(bodyParser.json());

serviceRouter.route('/')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json('Will send all the services to you.');
})
.post((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`Will add the service ${req.body.name} with the description: ${req.body.description} and price $${req.body.price}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /services');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation is not supported on /services');
});

serviceRouter.route('/:serviceId')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`Will send the service #${req.params.serviceId} to you.`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation is not supported on /services/${req.params.serviceId}.`);
})
.put((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content_Type', 'application/json');
    res.json(`Updating the service #${req.params.serviceId}`);
})
.delete((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`Deleting service #${req.params.serviceId}`);
});

serviceRouter.route('/:serviceId/reservations')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`Will send all the reservations for the service #${req.params.serviceId} to you.`);
})
.post((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`Will add a reservation to service #${req.params.serviceId}. Details: client ${req.body.name}, ${req.body.date} at ${req.body.time}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation is not supported on /services/${req.params.serviceId}/reservations`);
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end(`DELETE operation is not supported on /services/${req.params.serviceId}/reservations`);
});

serviceRouter.route('/:serviceId/reservations/:reservationId')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`Will send the reservation #${req.params.reservationId} to the service #${req.params.serviceId} to you.`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation is not supported on /services/${req.params.serviceId}/reservations/${req.params.reservationId}.`);
})
.put((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content_Type', 'application/json');
    res.json(`Updating the reservation #${req.params.reservationId}`);
})
.delete((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`Deleting reservation #${req.params.reservationId}`);
});

module.exports = serviceRouter;