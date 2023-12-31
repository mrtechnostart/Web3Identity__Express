const express = require("express");
const { router } = require("./routes/route");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/postdata", router);

const port = 4004;
async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URI);
    app.listen(port, () => {
      console.log(`Listening at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
connect();
