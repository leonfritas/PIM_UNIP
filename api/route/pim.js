import express  from "express";

import { selecionarProduto, selecionarDestino, salvarProduto, salvarDestino, verificarProduto, promocaoProduto, salvarProdutoDestino } from '../controllers/pim.js' 

const getPimRoute = express.Router();


getPimRoute.post('/selecionarProduto', selecionarProduto);
getPimRoute.post('/selecionarDestino', selecionarDestino);
getPimRoute.post('/salvarProduto', salvarProduto);
getPimRoute.post('/salvarDestino', salvarDestino);
getPimRoute.post('/verificarProduto', verificarProduto);
getPimRoute.post('/promocaoProduto', promocaoProduto);
getPimRoute.post('/salvarProdutoDestino', salvarProdutoDestino);


export default getPimRoute

