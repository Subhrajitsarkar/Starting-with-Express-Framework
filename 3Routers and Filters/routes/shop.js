let express = require('express')
let router = express.Router()

router.get('/', (req, res, next) => { //GET for displaying 
    res.send('<h1>hello from express</h1>')
})

module.exports = router