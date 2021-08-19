const express = require("express");
const appp = express();
const port = process.env.PORT || 3000;

// routing
// app.get(path , callback)
appp.get("/",(req,res)=>{
    res.send("!Connection is Ready!");
})
//server create
appp.listen(port, () =>{
    console.log(`server is running at port no:${port}`)

})





