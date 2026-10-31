require("dotenv").config();

const express = require("express");
const connectDB = require("./db");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
app.get('/',(req,res) => {
    res.sendFile(__dirname+"/login.html");
});

app.get('/register',(req,res) => {
    res.sendFile(__dirname+"/register.html");
});

app.get('/home',(req,res) =>{
    res.sendFile(__dirname+'/home.html');
});

app.get('/organiser',(req,res) =>{
    res.sendFile(__dirname+'/organiser.html');
});
app.get('/admin',(req,res) =>{
    res.sendFile(__dirname+'/admin.html');
});

