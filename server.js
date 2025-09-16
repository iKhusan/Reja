console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const path = require("path");
//1 : kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//2 Session
//3 : views


app.set("views", __dirname);
app.set("view engine","ejs");

//4 : routing
// app.get("/hello",function(req, res) {
//     res.end(`<h1 style="background: green">Hello wrold</h1>`);
// });

app.post("/create-item", (req, res)=>{
    console.log(req.body);
    res.json({test:"success"});
});

app.get("/", function(req, res){
    res.render('harid');
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is on Port: ${PORT}`);
});