const express = require ("express");

// creaating an express js application (web server)
const app = express();

// request handler
// "/path"

app.use("/test", (req,res) => {
    res.send("hello there");
    // req.end();
})

app.listen(4000, () => {
    console.log("server is listening");
});

// nodemon : automatically restarts the server
// npm i -g nodemon

// npm install : installs all the dependancies from package.json

