const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Email-data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("successfull connection");
  })
  .catch((err) => {
    console.log(err);
  });
