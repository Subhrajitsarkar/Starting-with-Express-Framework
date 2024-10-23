// let http = require('http');
// const express = require('express')
// const app = express()

// let server = http.createServer(app)

// server.listen(3000)




// let http = require('http');
// const express = require('express')
// const app = express()

// app.use((req, res, next) => {
//     console.log('middleware');
//     next() //allows the req to continue to the next middleware
// })
// app.use((req, res, next) => {
//     console.log('2nd middleware');

// })
// let server = http.createServer(app)

// server.listen(3000)




// let http = require('http');
// const express = require('express')
// const app = express()

// app.use((req, res, next) => {
//     console.log('middleware');
//     next()
// })
// app.use((req, res, next) => {
//     console.log('2nd middleware');
//     res.send('<h1>hello from express</h1>')
// })
// let server = http.createServer(app)

// server.listen(3000)




const express = require('express')
const app = express()
//app.use()-> Executed in order of definition
app.use((req, res, next) => {
    console.log('middleware');
    next()
})
app.use((req, res, next) => {
    console.log('2nd middleware');
    res.send('<h1>hello from express</h1>')
})
app.listen(3000)