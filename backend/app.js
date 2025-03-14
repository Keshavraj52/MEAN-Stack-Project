const express = require('express')
const app = express()
const port = 3000
const mongoose=require("mongoose");



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/users', (req, res) => {
  // user add operation

  res.send('done')
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