const express = require('express')

const app = express()
const path = require('path')

app.use(express.static('dist'));

var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS

app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(process.env.PORT || 80, (req, res) => {
    console.log("Server initialized on port 80")
})