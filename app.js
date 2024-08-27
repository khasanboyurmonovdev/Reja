console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});
//Mongo DB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

//1 bosqich expressga kirib kelayotgan malumotlarga bogliq bolgan kodlar yoziladi:KIRISH KODLARI
app.use(express.static("public F")); //bu har qanday browserdan kirib kelyapkan zaproslar uchun public folderi ochiq degan manoni anglatadi.yani faqat public folderni kora oladi degani
app.use(express.json()); // bu operatsiyamiz kirib kelyapkan json formatdagi datani object xolatida bizga ogirib beradi
app.use(express.urlencoded({ extended: true })); // bu operatsiyamiz bolmasa html formdegi post qilingan narsalarni express serverimiz qabul qilmaydi

//2chisida: sessionlarga bogliq narsa yoziladi buyerda

//3chi bosqichda. bssr=backend server site rendering. backend ichida html yasaymiz ejs orqali.:VIEWSGA BOGLIQ KODLAR
app.set("views", "views");
app.set("view engine", "ejs"); // views folderni ichidan oqiydi degani

//4chi bosqichda: routerlarni shakllantrb olamiz:ROUTINGGA BOGLIQ KODLAR
// app.get("/hello", function(req,res){res.end(`<h1 style="background: red" >HELLO WORLD by Khasanboy</h1>`);});
// app.get("/gift", function(req,res){res.end(`<h1 style="background: blue" >Siz sovgalari bolimidasiz</h1>`);});
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});
app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});
app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar ochirildi" });
    });
  }
});
app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});
app.get("/home", function (req, res) {
  res.render("home");
});
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
