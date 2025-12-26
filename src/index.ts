import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import {conncetDatabase} from './database/mongodb';
import { PORT } from './config';

import dotenv from "dotenv";
dotenv.config();
// can use .env variable below this
console.log(process.env.PORT);

import  authRoutes from './routes/auth.route';

import router from './routes/book.route';

const app: Application= express();
// const PORT: number = 3000;

app.use(bodyParser.json());

app.get('/',(req:Request, res: Response) => {
    res.send('Hello world');
});

app.use('/api/books',router);
app.use('/api/auth',authRoutes);

async function startServer() {
    app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT}`);
}
);
}
startServer();

