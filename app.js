console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
 const mongodb = require("mongodb");

//MongoDB
const db = require("./server").db();


//1 : kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//2 Session
//3 : views


app.set("views", "views");
app.set("view engine","ejs");

//4 : routing

// app.get('/author', (req,res) => {
//     res.render("author",{user: user});
// });
app.post("/create-item", (req, res)=>{
     console.log('user entered /create-item')
    console.log(req.body);
    const newReja = req.body.reja;
    db.collection("plans").insertOne({reja: newReja}, (err, data) => {
        console.log(data.ops);
      res.json(data.ops[0]);   
    });
 });
 app.post("/delete-item", (req, res) =>{
const id = req.body.id;
db.collection("plans").deleteOne(
    {_id: new mongodb.ObjectId(id)},
    function(err,data) {
        res.json({state:"success"});
    }
   );
 });

app.get("/", function(req, res){
    console.log('user entered /')
    db.collection("plans").find().toArray((err, data) => {
if (err) {
    console.log(err);
    res.end("something went wrong");
} else {
 
     res.render("reja",{items:data});
}
    })
   
});
module.exports = app;







