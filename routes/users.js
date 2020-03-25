var express = require('express');
const bodyParser = require('body-parser');

const userRouter = express.Router();

userRouter.route('/')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json('Will send all the users to you.');
})
.post((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`Will add the user ${req.body.name} with the password: ${req.body.password}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /users');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation is not supported on /users');
});

userRouter.route('/:userId')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`Will send the user #${req.params.userId} to you.`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation is not supported on /users/${req.params.userId}.`);
})
.put((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content_Type', 'application/json');
    res.json(`Updating the user #${req.params.userId}`);
})
.delete((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`Deleting user #${req.params.userId}`);
});

module.exports = userRouter;
