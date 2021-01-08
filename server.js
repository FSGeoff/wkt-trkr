const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
	console.log("Mongoose connected successfully!");
});

connection.on("error", (err) => {
	console.log("Mongoose connection error: " + err);
});

app.get("/api/config", (req, res) => {
	res.json({
		success: true,
	});
});

const backEndRoutes = require("./controller/apiRoutes");
const frontEndRoutes = require("./controller/views.js");

app.use(backEndRoutes);
app.use(frontEndRoutes);

app.listen(PORT, () => {
	console.log(`App running on port http://localhost:${PORT}`);
});
