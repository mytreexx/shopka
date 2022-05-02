const express = require('express')
const router = express.Router()
const { User } = require('../models')


router.get('/', async (req, res, next) => {
    try {
        res.send(await User.findOne({ where: { id: 1 } }))
    } catch (err) {
        res.status(404)
        console.error(`Error finding products `, err.message)
        next(err)
    }
})

module.exports = router
