const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname,"/Washing Machine/")));
app.get("/",(req,res) =>{

    res.send('TEST');
})

app.listen(port, ()=>{
    console.log("Listening On Port %d",port);
})