const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { getDrinks, addDrink, deleteDrink, updateLikes } = require("./controller");

app.get("/getDrinks", getDrinks);
app.post("/addDrink", addDrink);
app.delete("/deleteDrink/:id", deleteDrink);
app.put("/updateLikes/:id", updateLikes);
//you don't need the : when you have it on the front end, : lets the serever know that it should be expecting a parameter

app.listen(4567, () => console.log("Avengers assembled on port 4567!"));
