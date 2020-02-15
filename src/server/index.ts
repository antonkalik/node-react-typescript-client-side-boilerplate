import * as dotenv from 'dotenv';
import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

const PORT = process.env.PORT || 9999;

console.log({ ENV: process.env.NODE_ENV });

const app = express();
app.use('/', express.static('dist/public'));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api/test', (req: Request, res: Response) => {
  res.send({ someData: { dataHere: 'hello ts boilerplate' } });
});

app.listen(PORT, () => {
  console.log(`Rest api running on port: ${PORT}`);
});
