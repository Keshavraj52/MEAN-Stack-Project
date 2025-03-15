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

async function getuser(id){
    const user=await User.findById(id);
    return user.toObject();
 }
 
async function updateUser(id,userModel) {
    const filter={_id: id};
    await User.findOneAndUpdate(filter,userModel);
}


async function deleteUser(id){
    const filter={_id: id};
    await User.findByIdAndDelete(id);
 }

module.exports = { adduser,getusers,getuser ,updateUser,deleteUser};
