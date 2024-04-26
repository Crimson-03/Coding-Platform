const connectToMongo = require("./db/connect");
const express = require("express");
var cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// testing home page
app.get("/", (req, res) => {
  res.send("Hello world");
});

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/codes', require('./routes/codes'));

const start = async () => {
  try {
    await connectToMongo(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on the port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
