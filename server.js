const express = require('express')

const app = express()

app.use(express.static('dist'));

app.listen(80, (req, res) => {
    console.log("Server initialized on port 2000")
})