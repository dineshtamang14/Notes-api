const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const db = require("./config/db");

const app = express();
app.use(express.json())
const port = 8000;

MongoClient.connect(db.url, (err, database) => {
    if(err) return console.log(err);
    require("./app/routes")(app, {database});
    app.listen(process.env.PORT || port, (req, res) => {
      console.log(`server is running on port ${port}`);
    });
})

