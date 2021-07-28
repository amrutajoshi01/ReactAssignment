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
    const searchText = req.query.searchText;
    const offset = page > 0 ? (page * limit) : 0;
    let products = Object.assign([], productsMockData);
    if(searchText !== '') {
        products = products.filter(x => x.name.includes(searchText));
    }
    let pagingatedData = products.splice(offset, limit);
    // res.json(pagingatedData);
    setTimeout(() => {
        res.json(pagingatedData);
        //res.status(500).send("Something went wrong");
    }, 1000)
    //res.status(500).send("Something went wrong");
});

app.get('/search', (req, res) => {
    let searchResults = [];
    for (product of productsMockData);

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
            res.status(500).send("Something went wrong");
        }
        else {
            obj = JSON.parse(data);
            obj.push(order);
            json = JSON.stringify(obj);
            fs.writeFile('./src/orders.json', json, 'utf8', function (err) {
                if (err)
                    res.status(500).send("Something went wrong");
                res.send();
            });

        }
    });

});

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});