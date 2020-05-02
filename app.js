var express = require("express");
var app = express();
var mongoose = require("mongoose");
var	bodyParser = require("body-parser");
var Todo = require("./models/todo");
var	methodOverride  = require("method-override")

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// mongoose.connect("mongodb://localhost:27017/todo");
mongoose.connect("mongodb+srv://Lisa:****@cluster0-ulpnb.mongodb.net/test?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log("Connected to DB!");
}).catch(err => {
	console.log("Error: ", err.message);
});

app.get("/", function(req, res) {
	Todo.find({}, function(err, todos) {
		if(err) {
			console.log(err);
		} else {
			res.render("index", {todos: todos});
		}
	});
});

app.post("/", function(req, res) {
	Todo.create(req.body.Todo, function(err, todo) {
		if(err) {
			console.log("Here: " + err);
		} else {
			res.redirect("/");
		}
	})
});

app.delete("/:id", function(req, res) {
	// setTimeout(function() {
	// }, 2000);
	Todo.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			console.log(err);
		} else {
			res.redirect("/");
		}
	})
});

app.listen(process.env.PORT || 3000, function() {
	console.log("Todo List server started!");
})