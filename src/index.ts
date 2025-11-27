import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import router from './routes/book.route';

const app: Application= express();
const PORT: number = 3000;

app.use(bodyParser.json());

app.get('/',(req:Request, res: Response) => {
    res.send('Hello world');
});

app.use('/api/books',router);

app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT}`);
}
);