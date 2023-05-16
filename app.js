const express = require("express");

const app = express();

app.listen(80);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {

    res.render("index.ejs", { title: "Hjem" });
});