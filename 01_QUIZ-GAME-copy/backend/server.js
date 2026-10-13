require("dotenv").config();

const express = require("express");
const app = express();
const host = process.env.HOST;
const port = process.env.PORT || 8888;
const routes = require("./src/routes/webRoute");
const cors = require("cors");

app.use(express.text());

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  }),
);

app.use("/", routes);
app.listen(port, host, () => {
  console.log(`Server is running on ${host}:${port}`);
});
