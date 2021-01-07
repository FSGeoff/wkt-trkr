const express = require("express");
const db = require("../models/workout");
const path = require("path");
const router = express.Router();

router.get("api/workouts", (req, res) => {
	db.Workout.find().then((foundWorkout) => {
		res.json(foundWorkout);
	});
});

router.post("api/workouts", (req, res) => {
	db.Workout.create(req.body).then((newWorkout) => {
		res.json(newWorkout);
	});
});

module.exports = router;
