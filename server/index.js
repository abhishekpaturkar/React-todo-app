require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./routes")
const cors = require("cors");
const {connectionDB} = require("./db")

// Database Connection 
connectionDB();
app.use(cors())
app.use(express.json());
app.use("/api", router);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})