console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// MongoDB chaqirish
const db= require("./server").db();

/*const fs = require("fs");
const { isUtf8 } = require("buffer");
let user;
fs.readFile("database/user.json", "utf8",(err,data)=> {
    if(err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data)
    }
}); **/

//MongoDB

//1 : kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//2 Session
//3 : views


app.set("views", "views");
app.set("view engine","ejs");

//4 : routing
// app.get("/hello",function(req, res) {
//     res.end(`<h1 style="background: green">Hello wrold</h1>`);
// });
app.get('/author', (req,res) => {
    res.render("author",{user: user});
});
app.post("/create-item", (req, res)=>{
     console.log('user entered create-item')
    console.log(req.body);
    const newReja = req.body.reja;
    db.collection("plans").insertOne({reja: newReja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");

      }  else {  res.end("successfully added");
      
      }
    });
 
    //res.json({test:"success"});
});

app.get("/", function(req, res){
    console.log('user entered /')
    db.collection("plans").find().toArray((err, data) => {
if (err) {
    console,log(err);
    res.end("something went wrong");
} else {

     res.render("reja",{items:data});
}
    })
   
});
module.exports = app;
