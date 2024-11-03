const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sequelize = require("./utils/database");

const userRoute = require("./routes/userRoute");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/get", userRoute);
app.use("/post", userRoute);

sequelize
    .sync()
    .then((result) => {
        app.listen(3000);
    })
    .catch((err) => console.log(err));