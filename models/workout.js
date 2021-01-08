const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema(
	{
		day: {
			type: Date,
			default: Date.now,
		},
		exercises: [
			{
				type: {
					type: String,
					trim: true,
					require: "Type is required",
				},
				name: {
					type: String,
					trim: true,
					require: "Name is required",
				},
				duration: {
					type: Number,
					default: 0,
				},
				weight: {
					type: Number,
				},
				reps: {
					type: Number,
				},
				sets: {
					type: Number,
				},
				distance: {
					type: Number,
				},
			},
		],
	},
	{ toJSON: { virtuals: true } }
);
WorkoutSchema.virtual("totalDuration").get(function () {
	return this.exercises.reduce((totalDuration, exercise) => {
		return totalDuration + exercise.duration;
	}, 0);
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
