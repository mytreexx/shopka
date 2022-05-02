const express = require('express')
const router = express.Router()
const { Watchlist, sequelize, Op } = require('../models')


router.get('/', async (req, res, next) => {
    try {
        const watchlist = await Watchlist.findAll({ where: { watching_user: 1 } })
        const watchlistArray = []

        watchlist.forEach(item => {
            watchlistArray.push(item.watched_product)
        })
        res.send(watchlistArray)

    } catch (err) {
        res.status(404)
        console.error(`Error finding Watchlist products `, err.message)
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const { product_id } = req.body

    try {
        await sequelize.sync()
        await Watchlist.create({
            watching_user: 1,
            watched_product: product_id
        })

        const watchlist = await Watchlist.findAll({ where: { watching_user: 1 } })
        const watchlistArray = []

        watchlist.forEach(item => {
            watchlistArray.push(item.watched_product)
        })
        res.send(watchlistArray)
    } catch (err) {
        res.status(404)
        console.error(`Error Adding to watchlist `, err.message)
        next(err)
    }
})

router.delete('/', async (req, res, next) => {
    const { product_id } = req.query

    try {
        await sequelize.sync()
        await Watchlist.destroy({
            where: {
                [Op.and]: [
                    { watched_product: product_id },
                    { watching_user: 1 }
                ]
            }
        })

        const watchlist = await Watchlist.findAll({ where: { watching_user: 1 } })
        const watchlistArray = []

        watchlist.forEach(item => {
            watchlistArray.push(item.watched_product)
        })
        res.send(watchlistArray)
    } catch (err) {
        res.status(404)
        console.error(`Error Adding to watchlist `, err.message)
        next(err)
    }
})



module.exports = router
