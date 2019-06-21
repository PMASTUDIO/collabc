const express = require('express')

const app = express()
const path = require('path')

app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.get('*')

app.listen(process.env.PORT || 80, (req, res) => {
    console.log("Server initialized on port 80")
})