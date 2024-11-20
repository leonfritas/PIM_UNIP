import express from "express"
import cors from 'cors'

import produtoRoute from './route/produtos.js'
import getPimRoute from './route/pim.js'


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cors());

app.use('/', produtoRoute);
app.use('/produto', getPimRoute);
app.use('/destino', getPimRoute);


app.listen(5000);
