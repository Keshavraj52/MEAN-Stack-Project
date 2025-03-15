const express = require('express')
const router=express.Router();
const {adduser,getusers,getuser,updateUser, deleteUser}= require("./../handlers/userHandle")

router.post('/users',async(req,res) => {
  console.log("req.body",req.body);
  await adduser(req.body);
  res.send('done');
});

router.get('/users',async(req,res) => {
  let users=await getusers();
  res.send(users);
});

router.get("/users/:id", async(req,res)=>{
    console.log("id",req.params["id"]);
    let user=await getuser(req.params["id"]);
    res.send(user);
});

router.put("/users/:id", async(req,res)=>{
    console.log("id",req.params["id"]);
    await updateUser(req.params["id"],req.body);
    res.send();
});

router.delete("/users/:id", async(req,res)=>{
    console.log("id",req.params["id"]);
    await deleteUser(req.params["id"]);
    res.send();
});

module.exports=router;