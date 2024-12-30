let express = require('express')
let app = express()

let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let cors = require('cors')
app.use(cors())

let path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

let Order = require('./Models/orderModel')
let sequelize = require('./utils/database')

app.post('/order/add-order', async (req, res, next) => {
    try {
        let price = req.body.price;
        let name = req.body.name;
        let table = req.body.table;
        if (!price || !name || !table)
            throw new Error('All fields are required')
        let data = await Order.create({ price, name, table })
        res.status(200).json({ data })
    } catch (err) {
        console.log('error occured in add-order', err);
        res.status(500).json({ error: err.message })
    }
})

app.get('/order/get-orders', async (req, res, next) => {
    try {
        let data = await Order.findAll()
        res.status(200).json({ allOrders: data })
    }
    catch (err) {
        console.log('error in get-orders', err);
        res.status(500).json({ error: err.message })
    }
})

app.delete('/order/delete-order/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        if (!id)
            return res.status(400).json({ error: 'id is required' })
        await Order.destroy({ where: { id } })
        res.sendStatus(200)
    } catch (err) {
        console.log('err in delete-order', err);
        res.status(500).json({ error: err.message })
    }
})

app.put('/order/edit-order/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let { price, name } = req.body
        if (!id || !price || !name)
            return res.status(400).json({ error: 'All fields are required' })
        await Order.update({ price, name }, { where: { id } })
        await User.findByPk(id);
        res.sendStatus(200)
    }
    catch (err) {
        console.log('error in edit-order', err);
        res.status(500).json({ error: err.message })
    }
})

sequelize.sync()
    .then(() => {
        app.listen(3000, () => console.log('server running pn port 3000'))
    })
    .catch(err => console.log('error in sync', err))