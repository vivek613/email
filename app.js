var nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
var db = require("./connect/db.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());

var to;
var subject;
var body;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/sendemail", (req, res) => {
  to = req.query.to;
  subject = req.query.subject;
  body = req.query.body;

  var transporter = nodemailer.createTransport({
    //  host: "localhost",
    //  port:587,
    service: "gmail",
    secure: false,

    auth: {
      user: "vicoder77@gmail.com",
      pass: "Vivek123@",
    },
  });

  var mailOptions = {
    from: "vicoder77@gmail.com",
    to: to,
    subject: subject,
    text: body,
    // html:'<iframe width="560" height="315" src="https://www.youtube.com/embed/vjv6vkAVNYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    attachment: [
      {
        filename: "file.txt",
        content: "vivek is happy",
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email send:");
      res.sendFile(__dirname + "/result.html");
      var ec = new form({ to, subject, body });
      ec.save()
        .then((form) => {
          req.flash("success msg");
        })
        .catch((err) => console.log(err));
    }
  });
});

app.listen(5000, () => {
  console.log("App started on Port 5000");
});
