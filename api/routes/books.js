const express = require('express')
const router = express.Router()
var Book = require('../models/book')

router.get('/', (req, res, next) => {
    Book.find((error, books) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.json(books)
        }
    })
})

router.get('/:id', (req, res, next) => {
    res.status(200).send({
        'message': 'Single book'
    })
})

router.post('/', (req, res, next) => {
    if (req.body.title && req.body.author && req.body.store_qty) {
        var bookData = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre ? req.body.genre : 'No Genre',
            tags: req.body.tags ? req.body.tags : ['fiction'],
            store_qty: req.body.store_qty
        };
        Book.create(bookData, (error, book) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.status(201).send({
                    'status': '201',
                    'message': 'Book created'
                });
            }
        });
    } else {
        res.status(400).send({
            'status': '400',
            'message': 'All field required'
        })
    }
})

router.put('/:id', (req, res, next) => {
    res.status(200).send({
        'message': 'Book Updated'
    })
})

router.delete('/:id', (req, res, next) => {
    res.status(200).send({
        'message': 'Book Deleted'
    })
})

module.exports = router