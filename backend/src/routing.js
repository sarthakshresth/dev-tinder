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



// app.get("getcall", (req, resp) => {
//     resp.send("response from the server");
// })

// app.get(/ab+c/, (req, resp) => {
//     resp.send("response from the server");
// })

// // /a(bc repeated N times)(d repeated M times)/
// app.get(/a(bc)+d/, (req, resp) => {
//     resp.send("response from the server");
// })

// // rejex
// app.get(/.*fly$/, (req, resp) => {
//     resp.send("response from the server");
// })

// // reading query parameters
// app.get("test", (req, resp) => {
//     console.log(req.query);
    
//     resp.send({firstname: "sarthak", lastname: "shresth"});
// })

// // another method
// app.get("/test1/:userId/:password/:name", (req, resp) => {
//     console.log(req.params);
    
//     resp.send({firstname: "sarthak", lastname: "shresth"});
// })

// app.post("/postcall", (req, resp) => {
//     resp.send({firstname: "sarthak", lastname: "shresth"});
// })



// route
app.use(
    "/user", 
    (req, resp, next) => {
        // if i am sending no response then the server will respond nothing when i make request

        // resp.send("response")

        next();

        // resp.send("response2"); // this will send an error since the http connection is already closed
    },

    // one route can have multiple route handlers
    (req, resp, next) => {
        resp.send("response1");

        next(); // this will throw error if previously no response was sent but wont throw an error if any resp was sent..
    }

    // we can also wrap routehandlers inside an array (some or all at a time) : dosent create any difference

    // if the first route handler is sending resp then it will only send response... no other will send
    // if first in not sending then we need to call next()
)



app.listen(4000, () => {
    console.log("server is listening");
});

// nodemon : automatically restarts the server
// npm i -g nodemon

// npm install : installs all the dependancies from package.json

// ORDER OF ROUTING IS IMPORTANT