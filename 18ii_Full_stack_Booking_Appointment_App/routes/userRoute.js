let express = require('express')
let router = express.Router()
let userController = require('../controllers/userController')

router.post('/add-user', userController.addUser)

router.get('/get-users', userController.getUser)

router.delete('/delete-user/:id', userController.deleteUser)

module.exports = router;