console.log("web serverni boshlash");
const express = require('express');
const app = express();
const http = require("http");
//1 : kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//2 Session
//3 : views
app.set("views", "views");
app.set("view engine","ejs");
//4 : routing
app.get("/hello",function(req, res) {
    res.end(`<h1 style="background: green">Hello wrold</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is on Port: ${PORT}`);
});