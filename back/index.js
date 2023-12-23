const express = require("express");
const cors = require("cors"); //to communicate witn front
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);
//route
app.get("/", (req, res) => {
    res.send("welcome our chatApp APIs ..");
})


const port = process.env.PORT || 5000; //server Express
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
    console.log('Server is running on port... : ${port}');
});

//connect to our DB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connection established")).catch((error) => console.log
("MongoDB connection fail :", error.message))