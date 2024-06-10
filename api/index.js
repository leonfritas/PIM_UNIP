import express from "express"
import cors from 'cors'

import produtoRoute from './route/produtos.js'


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cors());

app.use('/', produtoRoute);

app.listen(5000);