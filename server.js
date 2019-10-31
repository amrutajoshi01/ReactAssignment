const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
const productsMockData = require("./src/data.json");
const orders = require("./src/orders.json");
var fs = require('fs');

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
    }, 1000)
    //res.status(500).send("Something went wrong");
});

app.get('/orders', (req, res) => {
    setTimeout(() => {
        res.json(orders);
    }, 1000)
});

app.post('/checkout', (req, res) => {
    let order = req.body
    fs.readFile('./src/orders.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        }
        else {
            obj = JSON.parse(data);
            obj.push(order);
            json = JSON.stringify(obj);
            fs.writeFile('./src/orders.json', json, 'utf8', function (err) {
                if (err) throw err;
            });
            res.send();
        }
    });

});

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});