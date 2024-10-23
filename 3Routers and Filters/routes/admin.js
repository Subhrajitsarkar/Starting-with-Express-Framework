let express = require('express')
let router = express.Router()

//admin/add-product => GET for displaying forms
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

//admin/add-product =>POST for submitting form
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router