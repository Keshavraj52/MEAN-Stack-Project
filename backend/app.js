const express = require('express')
const app = express()
const port = 5000
const mongoose=require("mongoose");
const { adduser, getusers } = require('./handlers/userHandle');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/users',async(req,res) => {
  console.log("req.body",req.body);
  await adduser(req.body);
  res.send('done');
})

app.get('/users',async(req,res) => {
  let users=await getusers();
  res.send(users);
})

async function connectDb(){
 await mongoose.connect("mongodb://localhost:27017/", {
    dbName:"UsersDb"
  })
}
connectDb().catch((err)=>console.error(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})