const User=require("./UsersTable");

const addUser=async (username,password)=>{
    let user=new User({
        username:username,
        password:password
    });

    await user.save();
    
    return user;
}

// const delUser=async (_id)=>{
// let user =new User();
// user._id=_id;
// user.dele
// }

const retrieveUsers = async ()=>{
    let users= await User.find();
    return users;
}

const delUser= async (_id)=>{
    let user= await User.findByIdAndDelete(_id);
    return user;
}

const updateUser= async (_id,username,password)=>{
    let user = await User.findById(_id);
    user.username=username;
    user.password=password;
    await user.save();
    return user;
}

module.exports.addUser=addUser;
module.exports.retrieveUsers=retrieveUsers;
module.exports.delUser=delUser;
module.exports.updateUser=updateUser;