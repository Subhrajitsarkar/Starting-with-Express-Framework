let User = require('../models/userModel')

let addUser = async (req, res, next) => {
    try {
        if (!req.body.number) {
            throw new Error('Phone number is mandatory');
        }
        let name = req.body.name;
        let email = req.body.email;
        let phonenumber = req.body.number;

        let data = await User.create({ name: name, email: email, phonenumber: phonenumber })
        // this data is sending in backend
        res.status(201).json({ newUserDetail: data })
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}

let getUser = async (req, res, next) => {
    try {
        let users = await User.findAll();
        res.status(200).json({ allUsers: users })
    }
    catch (err) {
        console.log('Get user is failing', JSON.stringify(err))
        res.status(500).json({ error: err })
    }
}

let deleteUser = async (req, res) => {
    try {
        if (!req.params.id) {
            console.log('ID is missing')
            return res.status(400).json({ err: 'ID is missing' })
        }
        let uId = req.params.id;
        await User.destroy({ where: { id: uId } })
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

module.exports = {
    addUser,
    getUser,
    deleteUser
}