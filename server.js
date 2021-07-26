const express = require("express");
const app = express();
const fs = require("fs");

const html = fs.readFileSync("index.html");

app.get("/",(req,res)=>{
    res.end(html);
})

app.listen(3000,()=>console.log("listening at port 3000"));