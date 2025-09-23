const http = require("http");

const mongodb = require("mongodb");
let db;
const connectionString = "mongodb+srv://khusan:950870377i@cluster0.qh2kepb.mongodb.net/RejaretryWrites=true&w=majority&appName=Cluster0"

mongodb.connect(connectionString, {useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("error on connection mongodb");
    else {
       module.exports = client;
        console.log("connection secceed ")
        const app = require("./app");
  const server = http.createServer(app);
 let PORT = 3000;
 server.listen(PORT, function () {
     console.log(`the server is running on port: ${PORT}, http://localhost:${PORT}`); 

 });
    }
});







