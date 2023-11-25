import "dotenv/config.js"
// import session from "express-session"
import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas")





// const express = require('express');
const app = express();

app.use(express.json());
// app.use(cors({
//     credentials:true,
//     origin: process.env.FRONTEND_URL
// }));

app.use(cors());

// app.use(cors());


ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);

app.listen( process.env.PORT || 4000);
