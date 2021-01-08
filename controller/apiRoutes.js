const express = require("express");
const db = require("../models/workout");
const path = require("path");
const router = express.Router();

// router.get("/api/workouts", (req, res) => {
// 	db.Workout.find({}, (err, foundWorkout) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(foundWorkout);
// 			res.json(foundWorkout);
// 		}
// 	});

// });

router.post("/api/workouts", (req, res) => {
	db.Workout.create(req.body).then((newWorkout) => {
		res.json(newWorkout);
	});
});

router.put("/api/workouts/:id", (req, res) => {
	db.Workout.findByIdAndUpdate(
		{ _id: req.params.id },
		{ $push: { exercises: req.body } }
	).then((updateWorkout) => {
		res.json(updateWorkout);
		console.log(updateWorkout);
	});
});

module.exports = router;
