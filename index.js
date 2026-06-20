const express = require('express');
const app = express();
app.use(express.json())
const port = 3000;

app.get("/", (req, res) => {
    res.status(200).json({ message: "hello" })
})

app.listen(port, () => {
    console.log("http://localhost:3000")
})