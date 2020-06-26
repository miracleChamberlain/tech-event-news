
const express = require('express')
const bodyParser = require('body-parser');
const request = require('request')
const mongoose = require ('mongoose')
const ejs = require('ejs');



const app = express();


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));



//connect to database
mongoose.connect("mongodb+srv://tech:test2345@cluster0-eibuh.mongodb.net/techeventDB", { useNewUrlParser: true })

const techeventSchema = new mongoose.Schema ({
	name:String,
	email:String,
	message:String
});

const Tech = mongoose.model("Tech", techeventSchema);

const tech = new Tech({
	fname:"Oracle",
	email:"Miraclechamberlain120000@gmail.com",
	message:"I have an offer for you"
});


app.get("/", function (req,res) {
	res.sendFile(__dirname + "/event.html")
})

app.post("/event.html", function (req,res) {
	const techName = req.body.fname
	const techAddress = req.body.email
	const techTellme = req.body.message

   const tech = new Tech({
		 name:techName,
		 email:techAddress,
		 message:techTellme
	 });
	 tech.save();

});
app.post("/event.html", function (req,res) {
	const techmodel = req.body.model
	res.redirect("/event.html");
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function(){
	console.log('server is using port 3000')
});
