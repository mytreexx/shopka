const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

const productRoute = require('./routes/product')
const userRoute = require('./routes/user')
const watchlistRoute = require('./routes/watchlist')

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json({
    limit: '100mb'
}))

app.use('/api/product', productRoute)
app.use('/api/user', userRoute)
app.use('/api/watchlist', watchlistRoute)

const clientPath = path.join(__dirname, '../', 'client', 'build')

app.use(express.static(clientPath))

app.get('*', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'))
})

const port = process.env.PORT || 1337

app.listen(port, () => {
    console.log(`the server is listening on port ${port}`)
})
