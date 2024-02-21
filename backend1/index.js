const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/CalmerYou", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });

  app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user){
        if(user.password===password){
            res.json("Success");
        }
        else{
            res.json("Incorrect Password");
        }
    }
    else{
        res.json("No record exists")
    }
    })
  })

app.post('/register', (req, res) => {
  const newuser = new UserModel(req.body);
  newuser.save()
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ error: err.message }));
});

const PORT = 8009;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
