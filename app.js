console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
 const mongodb = require("mongodb");

//MongoDB
const db = require("./server").db();


//1 : kirish
app.use(express.static("public")); // Middleware design pattern| ommaga ochiqlash
app.use(express.json());           // Middleware design pattern|=> Rest API
app.use(express.urlencoded({extended:true})); // Middleware design pattern| => Traditional API
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
      
      res.json(data.ops[0]);   
    });
 });
//  app.post("/delete-item", (req, res) =>{
// const id = req.body.id;
// db.collection("plans").deleteOne(
//     {_id: new mongodb.ObjectId(id)},
//     function(err,data) {
//         res.json({state:"success"});
//     }
//    );
//  });
app.post("/delete-item", (req, res) => {
    const id = req.body.id;

    db.collection("plans").deleteOne( 
    { _id: new mongodb.ObjectId(id) },
    function(err, data) {
        res.json({ state: "success"});
    }
    );
    
});

app.post("/edit-item", (req, res) => {
    const data =req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate( {
        _id: new mongodb.ObjectId(data.id)},
        {$set: {reja: data.new_input}},
            function (err, data) {
    res.json({state:"success"});
    }
  );
});

app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
res.json({state: "Hamma rejalar o'chirildi"});
    });
  }
});
// 1st Step FrontEnd sends a request to BackEnd
app.get("/", function(req, res){
    console.log('user entered /')

   // 2nd Step request came in backend
  // 3rd  Step request has gone to database from backend 
    db.collection("plans").find().toArray((err, data) => {
if (err) {
    console.log(err);
    res.end("something went wrong");
} else {
 // 4th Step comes back to backend from database
  //5th backend sends the data to frontend
     res.render("reja",{items:data});
}
    })
   
});
module.exports = app;







// Mongodb :
//Cluster => DATABASE - COLLECTION - DOCUMENT -DATASET

//API Request
// 1 TYPE       Traditional |REST |GRAPHQL
// 2 METHOD.     GAT|POST
// 3 STRUCTURE header |body