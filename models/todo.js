var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema ({
	todo: String
});

var Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;