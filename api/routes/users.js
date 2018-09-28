const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', (req, res, next) => {
    User.find((err, users) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.json(users)
        }
    });
})

router.get('/:id', (req, res, next) => {
    User.findById(req.params.id, (error, user) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(user);
        }
    });
})

router.put('/:id', (req, res, next) => {
    res.status(200).send({
        'message': 'User Updated'
    })
})

router.delete('/:id', (req, res, next) => {
    res.status(200).send({
        'message': 'User Deleted'
    })
})

router.get('/:id/books', (req, res, next) => {
    res.status(200).send({
        'message': 'Users book list'
    })
})

router.get('/:id/books/:id', (req, res, next) => {
    res.status(200).send({
        'message': 'Users single book'
    })
})

module.exports = router