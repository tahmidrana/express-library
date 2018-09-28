const express = require('express');
const router = express.Router();
var User = require('../models/user');

router.post('/register', (req, res, next) => {
    if (req.body.name && req.body.email && req.body.password) {
        var userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            user_type: req.body.user_type ? req.body.user_type : 'subscriber'
        };

        User.create(userData, (error, user) => {
            if (error) {
                res.status(500).send(error)
            } else {
                res.status(201).send({
                    'code': '201',
                    'status': 'Created',
                    'message': 'User created successfully',
                });
            }
        });
    } else {
        res.status(400).send({
            'code': '400',
            'status': 'Error',
            'message': 'App Fields are required'
        })
    }
})

module.exports = router