import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		full_name: {
			type: String,
			required: [true, "Full name is required"],
			trim: true,
			minLength: [3, "Full name must be at least 3 characters long"],
			maxLength: [50, "Full name must be at most 50 characters long"],
		},

		username: {
			type: String,
			required: [true, "Userame is required"],
			trim: true,
			unique: true,
			minLength: [3, "Username must be at least 3 characters long"],
			maxLength: [20, "Username must be at most 20 characters long"],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minLength: [6, "Password must be at least 6 characters long"],
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);

export default User;
