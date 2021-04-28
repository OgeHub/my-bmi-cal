const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res) {
    res.render("home");
});
app.get("/calculate", function (req,res) {
    res.render("bmiCal");
});

app.post("/calculate", function (req,res) {

    const weight = Number(req.body.wt);
    const height = Number(req.body.ht);

    const bmi = Math.round(weight/(height*height));

    res.render("result", {bmi:bmi});

});


app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
});