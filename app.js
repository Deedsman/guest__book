const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.routes");
const User = require("./models/User");
const app = express();
const path = require('path')
const cors = require('cors');

app.use(express.json({ extended: true }));
app.use("/api", userRouter);

const PORT = process.env.PORT || config.get("port");

async function start() {
  try {
    await mongoose.connect(config.get("mongoURL"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });

    app.listen(PORT, () =>
      console.log(`Starting the development on port ${PORT}`)
    );
  } catch (err) {
    console.error(err);
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get("*",(req, res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

start();
