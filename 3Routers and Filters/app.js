const express = require('express')
let bodyParser = require('body-parser')

const app = express()

let adminRoutes = require('./routes/admin')
let shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes)
app.use('/shop', shopRoutes)

app.use((req, res, next) => {
    res.status(404).send('page not found')
})

app.listen(3000)