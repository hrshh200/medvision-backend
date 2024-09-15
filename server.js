
const express = require("express");
const app = express();
// require("./models/dbconnect"); // Ensure this connects to your MongoDB

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello MedVision here!");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is listening at port number ${port}`);
});
