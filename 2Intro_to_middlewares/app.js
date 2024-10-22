// const express = require('express')
// const app = express()

// app.use('/', (req, res, next) => {
//     console.log('This always runs');
//     next()
// })

// app.use('/add-product', (req, res, next) => {
//     console.log('add product route');
//     res.send('<h1>hello from express</h1>')
// })

// app.use('/', (req, res, next) => {
//     console.log('2nd middleware');
//     res.send('<h1>hello from express</h1>')
// })

// app.listen(3000)



// const express = require('express')
// let bodyParser = require('body-parser')

// const app = express()

// app.use(bodyParser.urlencoded({ extended: false })); Now, body-parser middleware processes the form data. It takes the encoded title=My+name+is+Sona and converts it into an object: { title: 'My name is Sona' }.

// app.use('/add-product', (req, res, next) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
// })

// app.use('/product', (req, res, next) => {
//     console.log(req.body); //extract what user send to me. for this we req body-parser. op:- { title: 'My name is sona' }
//     res.redirect('/')
// })

// app.use('/', (req, res, next) => {
//     res.send('<h1>hello from express</h1>')
// })

// app.listen(3000)



// const express = require('express')
// let bodyParser = require('body-parser')

// const app = express()

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/add-product', (req, res, next) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
//     //An action attribute set to /product, meaning that when the form is submitted, the data will be sent to the /product URL.A method attribute set to POST, indicating that the data will be sent via an HTTP POST request.
// })

// app.post('/product', (req, res, next) => {
//     console.log(req.body); //extract what user send to me. for this we req body-parser. op:- { title: 'My name is sona' }
//     res.redirect('/')
// })

// app.use('/', (req, res, next) => {
//     res.send('<h1>hello from express</h1>')
// })

// app.listen(3000)



//assignment
const express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST">' +
        '<input type="text" name="title" placeholder="Product Title">' +
        '<input type="number" name="size" placeholder="Product Size">' +
        '<button type="submit">Add Product</button></form>');
    //An action attribute set to /product, meaning that when the form is submitted, the data will be sent to the /product URL.A method attribute set to POST, indicating that the data will be sent via an HTTP POST request.
})

app.post('/product', (req, res, next) => {
    console.log(req.body); //extract what user send to me. for this we req body-parser. op:- { title: 'sona', size: '4' }
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    res.send('<h1>hello from express</h1>')
})

app.listen(3000)