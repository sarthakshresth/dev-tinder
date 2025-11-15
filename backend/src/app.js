const express = require ("express");

// creaating an express js application (web server)
const app = express();



// // request handler
// // "/path"

// // app.use("/", (req,res) => {
// //     res.send("hello");
// //     // req.end();
// // })
// // // "/" : then none of the below routing works

// // we can access this
// app.use("/test/2", (req,resp) => {
//     resp.send("hello there testing 2");
//     // req.end();
// })

// app.use("/test", (req,resp) => {
//     resp.send("hello there testing");
//     // req.end();
// })
// // "/test" will handle /test and anything that we put like /test/xyz

// // THIS ROUTING WONT WORK
// app.use("/test/1", (req,resp) => {
//     resp.send("hello there testing 1");
//     // req.end();
// })

// app.use("/test1", (req,resp) => {
//     resp.send("hello testing again");
//     // req.end();
// })

// app.use("/", (req, resp) => {
//     resp.send("chainging order");
// })
// // changing order just solves the problem

// app.listen(4000, () => {
//     console.log("server is listening");
// });



app.get("getcall", (req, resp) => {
    resp.send("response from the server");
})

app.get(/ab+c/, (req, resp) => {
    resp.send("response from the server");
})

// /a(bc repeated N times)(d repeated M times)/
app.get(/a(bc)+d/, (req, resp) => {
    resp.send("response from the server");
})

// rejex
app.get(/.*fly$/, (req, resp) => {
    resp.send("response from the server");
})

// reading query parameters
app.get("test", (req, resp) => {
    console.log(req.query);
    
    resp.send({firstname: "sarthak", lastname: "shresth"});
})

// another method
app.get("/test1/:userId/:password/:name", (req, resp) => {
    console.log(req.params);
    
    resp.send({firstname: "sarthak", lastname: "shresth"});
})

app.post("/postcall", (req, resp) => {
    resp.send({firstname: "sarthak", lastname: "shresth"});
})

app.listen(4000, () => {
    console.log("server is listening");
});



// nodemon : automatically restarts the server
// npm i -g nodemon

// npm install : installs all the dependancies from package.json

// ORDER OF ROUTING IS IMPORTANT