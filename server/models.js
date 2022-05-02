const { Sequelize, Op, DataTypes } = require('sequelize')

const databaseUrl = process.env.CLEARDB_DATABASE_URL || 'mysql://root:@localhost:3306/shopka'

const sequelize = new Sequelize(databaseUrl)

const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

testConnection()

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    label: {
        type: DataTypes.STRING,
        allowNull: true
    },
    product_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false
})

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

const Watchlist = sequelize.define('watchlist', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    watched_product: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    watching_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})


module.exports = {
    sequelize,
    Op,
    Product,
    User,
    Watchlist
}
