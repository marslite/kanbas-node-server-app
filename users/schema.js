import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type:String, required: true},
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
        type: String,
        enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
        default: "USER"},
},
//Removing collation allows for the Routes to work properly otherwise it throws a Mongodb server connection error

{collection: "users"}

);

export default userSchema;