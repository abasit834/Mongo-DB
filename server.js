const express=require("express");
const mongoose=require("mongoose");
const {addUser,retrieveUsers,delUser,updateUser}=require("./CRUDonDb");

const app=express();

// app.use(express.json());

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname + "/index.html");
// })

// app.get("/CSSFile",(req,res)=>{
//     res.sendFile(__dirname + "/styles.css");
// })

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/FirstConnection",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async()=>{
    console.log("Connection Successfull");
    
    // let user1=await addUser("abc","hello1234");
    // console.log(user1);
    let user=await retrieveUsers();
    console.log(user);
    // let del=await delUser("657a8a646c4ca6ddb3da0dcd");
    // console.log(del);
    // let update=await updateUser("657a8a687c59357846847e9b","lol","789");
    // console.log(update);

}).catch((err)=>{
    console.log("Connection Failed");
    console.log(err.message);
});

app.listen(3030);
