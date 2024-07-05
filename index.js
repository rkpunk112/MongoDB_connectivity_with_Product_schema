const express = require("express");
const mongoose = require("mongoose");
const app = express();
const route=require('./route/people')



mongoose
  .connect(
    "mongodb+srv://rk9190743:vmv04p6rr313xhKp@backenddb.ru9xtiw.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected To database");
  })
  .catch(() => {
    console.log("Didn't able to Connect");
  });

  // mongodb+srv://rk9190743:<password>@backenddb.ru9xtiw.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api/products',route)

app.get("/", (req, res) => {
  res.send("Hoii Testing the express");
});



app.listen(5000, () => {
  console.log("server is Running at 5000.....");
});
