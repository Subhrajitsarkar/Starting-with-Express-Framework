let express = require('express');
let app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());


let userRoutes = require('./routes/userRoute')
app.use('/user', userRoutes)

let sequelize = require('./utils/database')
sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch(err => {
        console.error('Database sync failed:', err);
    });
