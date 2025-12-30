// import express, {Application, Request, Response} from 'express';
// import bodyParser from 'body-parser';
// import {connectDatabase} from './database/mongodb';
// import { PORT } from './config';
// import mongoose from "mongoose";
// console.log("Mongoose readyState:", mongoose.connection.readyState);


// import dotenv from "dotenv";
// dotenv.config();
// // can use .env variable below this
// console.log(process.env.PORT);

// import  authRoutes from './routes/auth.route';

// import router from './routes/book.route';

// const app: Application= express();
// // const PORT: number = 3000;

// app.use(bodyParser.json());

// app.get('/',(req:Request, res: Response) => {
//     res.send('Hello world');
// });

// app.use('/api/books',router);
// app.use('/api/auth',authRoutes);

// async function startServer() {
//     await connectDatabase();

//     app.listen(
//         PORT, 
//         () => {
//             console.log(`Server: http://localhost:${PORT}`);
//         }
//     );
// }

// startServer();

import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { connectDatabase } from "./database/mongodb";
import { PORT } from "./config";

import authRoutes from "./routes/auth.route";
import bookRoutes from "./routes/book.route";
import authUserRoutes from "./routes/admin/user.routes";

dotenv.config();

const app: Application = express();

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.use("/api/books", bookRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin/users/",authUserRoutes);

async function startServer() {
  try {
    await connectDatabase(); 
    console.log("Mongoose readyState:", mongoose.connection.readyState);

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
}

startServer();
