const express=require("express");
const mongoose=require("mongoose");
const {addUser,retrieveUsers,delUser,updateUser}=require("./CRUDonDb");

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.get("/CSSFile",(req,res)=>{
    res.sendFile(__dirname + "/styles.css");
})



mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/FirstConnection",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Connection Successfull");
    
    app.post("/signUp",async(req,res)=>{
        const {email,password,confirmPassword}=req.body;
        console.log(req.body);
        try {
            if (password === confirmPassword) {
            const userN = await addUser(email,password);
            console.log(userN);
            res.status(200).json({ message: "User created successfully" });
            } else {
            res.status(400).json({ message: "Passwords do not match" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    });
    
    // let user1=await addUser("abcdef","hello1245");
    // console.log(user1);
    // let user=await retrieveUsers();
    // console.log(user);
    // let del=await delUser("656c56f5cb655205af7dce1f");
    // console.log(del);
    // let update=await updateUser("656c56f7205d5770dcdfdb82","b4s17","pass123");
    // console.log(update);

}).catch((err)=>{
    console.log("Connection Failed");
    console.log(err.message);
});

app.listen(3030);
