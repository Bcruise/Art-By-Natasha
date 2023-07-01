const express = require('express');

const app = express();

app.post('images', (req, res) => {
    res.send("Hello Ben!!")
});

app.listen(8080, () => console.log("listening to port 8080"))