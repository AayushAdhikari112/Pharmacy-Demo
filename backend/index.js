const express = require("express");
const app = express();


app.get('/test', function(req, res) {
    res.send("Hey from backend")
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})