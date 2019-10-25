const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ "message": "Welcome" });
});

app.get('/products', (req, res) => {
    const limit = req.query.limit;
    const page = req.query.page;
    const offset = page * limit;
    console.log(limit, page);
    const obj = require("./src/data.json");
    res.json(obj.splice(offset+1, offset + limit));
});

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});