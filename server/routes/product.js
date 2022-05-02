const express = require('express')
const { HasMany } = require('sequelize')
const router = express.Router()
const { Op, Product, Watchlist } = require('../models')

router.get('/', async (req, res, next) => {
    const { searchTerm, sortBy, priceRange, minRating, isWatched } = req.query

    const query = {
        where: {},
        order: [],
        include: [],
        all: true,
    }

    if (isWatched === 'true') {
        query.include = {
            model: Watchlist,
            attributes: [],
            association: new HasMany(Product, Watchlist, {
                foreignKey: 'watched_product',
                sourceKey: 'id',
            }),
            where: {
                'watching_user': 1
            }
        }
    }

    if (searchTerm) {
        query.where.product_name = { [Op.like]: `%${searchTerm}%` }
        query.all = false
    }

    if (priceRange) {
        query.where.price = { [Op.between]: priceRange }
        query.all = false
    }

    if (minRating) {
        query.where.rating = { [Op.gte]: parseInt(minRating) }
        query.all = false
    }

    if (sortBy) {
        query.order = [sortBy.split('-')]
    }

    try {
        res.send(await Product.findAll({
            where: query.all ? {} : { [Op.and]: query.where },
            order: query.order,
            include: query.include
        }))

    } catch (err) {
        res.status(500)
        console.error(`Error finding products `, err.message)
        next(err)
    }
})

module.exports = router
