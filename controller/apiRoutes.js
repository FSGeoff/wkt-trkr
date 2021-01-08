const express = require("express");
const db = require("../models");
const path = require("path");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
	db.Workout.find({}, (err, foundWorkout) => {
		if (err) {
			console.log(err);
		} else {
			console.log(foundWorkout);
			res.json(foundWorkout);
		}
	});
});

router.get("/api/workouts/range", (req, res) => {
	db.Workout.find()
		.limit(7)
		.then((data) => {
			res.json(data);
			console.log(data);
		});
});

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
