import "dotenv/config.js"
import session from "express-session"
import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import mongoose from "mongoose"
import UserRoutes from "./users/routes.js"
import cors from "cors";

// const CONNECTION_STRING = process.env.CONNECTION_STRING 

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING
// || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(DB_CONNTECTION_STRING)
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas")


// const express = require('express');
const app = express();
app.use(cors({
    credentials: true,
    // origin: "http://localhost:3000",
    origin: process.env.FRONT_END
}));
const sessionOptions ={
    secret: "anything",
    resave: false,
    saveUninitialized: false,
};
if(process.env.NODE_ENV !== "development"){
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    }
}
app.use(session(sessionOptions))

app.use(express.json());
// app.use(cors({
//     credentials:true,
//     origin: process.env.FRONTEND_URL
// }));


// app.use(cors());

UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);

app.listen( process.env.PORT || 4000);
