const express = require('express');
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const { ATLAS_URI } = process.env;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // 리퀘스트 바디의 json을 해석

app.use('/posts', require('./routes/posts'));


// connect to mongoDB server
mongoose.connect(ATLAS_URI).then(() => {
    console.log("Successfully connected to mongodb");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
