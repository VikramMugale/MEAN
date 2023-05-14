const express = require('express');
const app = express();

const {MongoClient} = require('mongodb');
const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin",
  "http://localhost:4200");

  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-with, Content-Type,Accept");

  next();
})

app.listen(5100,function(req,res){
  console.log("Marvellous server has started succesfully");
});

app.get('/',function(req,res){
  res.send("Welcome to Marvellous server");
});

async function getConnection()
{
  let result = await client.connect();
  let db = result.db("Marvellous");
  return db.collection("Batches");
}

app.get('/getBatches', async function(req,res){
  let result = await getConnection();
  let data = await result.find().toArray();
  res.json(data);
})
