var mongoose = require("mongoose");

var ec = new mongoose.Schema({
  to: {
    type: String,
    
  },
  subject: {
    type: String,
    
  },
  body: {
    type: String,
    
  },
});

const form = new mongoose.model("Emaildata", ec);
module.exports = form;
