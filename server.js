
const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./src/connection/dbconnect"); //connecting to the database
const authRouter = require("./src/routes/auth");

var cors = require("cors");

// Middleware to parse JSON bodiescls
app.use(cors());
app.use(express.json());
app.use("/api", authRouter);

const port = process.env.PORT || 5000;
const start = async () => {
    try {
        const dbconnectstatus = await connectDB(process.env.MONGO_URL);
        if (dbconnectstatus) {
            console.log("Database Connected");
        }
        else {
            console.log("Error connecting to database");
        }
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log("error =>", error);
    }
};
start();