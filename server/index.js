const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

const { getDrinks } = require("./controller");

app.get("/getDrinks", getDrinks);

app.listen(4567, () => console.log("Avengers assembled on port 4567!"));
