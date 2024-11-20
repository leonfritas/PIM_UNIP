import express  from "express";

import { getProdutos, addProduto, updateProdutos, deleteProduto } from '../controllers/produto.js' 

const router = express.Router();

router.get('/', getProdutos)

router.post('/', addProduto)

router.put('/:id', updateProdutos)

router.delete('/:id', deleteProduto)

export default router

