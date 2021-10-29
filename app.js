const express = require("express");
const app = express();
const home = require("./routes/home");


//앱 셋팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // middle ware를 등록하는 method

module.exports = app;



// http로 열어본 서버 - 다루기 매우 귀찮다..!
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     if (req.url === '/'){
//     res.end("여기는 루트입니다");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, (req, res) => {
//     console.log("http로 열린 서버입니다.")
// });