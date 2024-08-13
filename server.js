console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require('http');
//1 bosqich expressga kirib kelayotgan malumotlarga bogliq bolgan kodlar yoziladi:KIRISH KODLARI
app.use(express.static("public")); //bu har qanday browserdan kirib kelyapkan zaproslar uchun public folderi ochiq degan manoni anglatadi.yani faqat public folderni kora oladi degani
app.use(express.json()); // bu operatsiyamiz kirib kelyapkan json formatdagi datani object xolatida bizga ogirib beradi
app.use(express.urlencoded({extended: true})); // bu operatsiyamiz bolmasa html formdegi post qilingan narsalarni express serverimiz qabul qilmaydi

//2chisida: sessionlarga bogliq narsa yoziladi buyerda

//3chi bosqichda. bssr=backend server site rendering. backend ichida html yasaymiz ejs orqali.:VIEWSGA BOGLIQ KODLAR
app.set("views", "views");
app.set("view engine","ejs"); // views folderni ichidan oqiydi degani



//4chi bosqichda: routerlarni shakllantrb olamiz:ROUTINGGA BOGLIQ KODLAR
app.get("/hello", function(req,res){res.end(`<h1 style="background: red" >HELLO WORLD by Khasanboy</h1>`);});
app.get("/gift", function(req,res){res.end(`<h1 style="background: blue" >Siz sovgalari bolimidasiz</h1>`);});

const server = http.createServer(app); //serverni qurib olamiz
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port: ${PORT}`);

});