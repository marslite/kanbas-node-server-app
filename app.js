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
mongoose.connect(DB_CONNECTION_STRING)
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas")


// const express = require('express');
const app = express();
// app.use(cors({
//     credentials: true,
//     // origin: "http://localhost:3000",
//     origin: ["https://kanbas-node-server-app-zi6l.onrender.com", process.env.FRONT_END, "http://localhost:3000"]
// }));
app.use(cors({
    credentials: true,
    origin: (origin, callback) => {
      const allowedOrigins = ["http://localhost:3000", process.env.FRONT_END];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
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


UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);

app.listen( process.env.PORT || 4000);
