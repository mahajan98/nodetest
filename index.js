require("dotenv").config();
const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors({
  origin: process.env.ALLOWED_CORS.toString()
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
  limit: "5mb"
}));

const morgan = require("morgan");
app.use(morgan("tiny"));






require("./routes/index")(app);


const port = process.env.PORT;

app.get("/test", (req, res) => {
  res.sendStatus(200).end();
});



app.listen(port, () => {
  console.log("Server listening on PORT : ", port);
});

