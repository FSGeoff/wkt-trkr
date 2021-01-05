const express = require("express");
const db = require("../models/workout");
const path = require("path");
const router = require("express").Router();

router.get("api/workouts", (req, res) => {
	db.Workout.find().then((foundWorkout) => {
		res.json(foundWorkout);
	});
});

module.exports = router;