const express = require('express');
const Connection  = require("./Utils/Connect.js")
const PORT = 3000

const app = express();

app.get("/",(req,res)=>{
    Connection()
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})