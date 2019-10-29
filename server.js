const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
const productsMockData = require("./src/data.json");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ "message": "Welcome" });
});

app.get('/products', (req, res) => {
    const limit = req.query.limit;
    const page = req.query.page;
    const offset = page > 0 ? (page * limit) : 0;
    let products = Object.assign([], productsMockData);
    let pagingatedData = products.splice(offset, limit);
    // res.json(pagingatedData);
    setTimeout(() => {
        res.json(pagingatedData);
        //res.status(500).send("Something went wrong");
    }, 2000)
    //res.status(500).send("Something went wrong");
});

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});