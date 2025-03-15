// const User=require("./../db/user")

// async function adduser(userMode) {
//     //todo
//     let user =new User({
//         ...userModel
//     })
//    await user.save();
//    return user.toObject();
// }

// module.exports={adduser};

const User = require("./../db/user");

async function adduser(userModel) { // Corrected parameter name
    let user = new User({
        ...userModel // Now using the correct parameter name
    });
    await user.save();
    return user.toObject();
}

async function getusers(){
   const users=await User.find();
   return users.map(x=>x.toObject())
}
module.exports = { adduser,getusers };
