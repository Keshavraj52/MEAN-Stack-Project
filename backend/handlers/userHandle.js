const User=require("./../db/user")

async function adduser(userMode) {
    //todo
    let user =new User({
        ...userModel
    })
   await user.save();
}

module.exports={adduser};