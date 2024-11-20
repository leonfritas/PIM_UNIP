import { db } from '../db.js';

export const selecionarProduto = (err, res) => {

    const q = 'SELECT * FROM produto'

    db.query(q, (err, data) => {

        if(err) {
            return res.json(err)
        }

        return res.status(200).json(data)
    })
}

export const selecionarDestino = (err, res) => {

    const q = 'SELECT * FROM destino'

    db.query(q, (err, data) => {

        if(err) {
            return res.json(err)
        }

        return res.status(200).json(data)
    })
}

export const salvarProduto = (req, res) => {
    const { nomeProduto } = req.body;
    const { qtdProduto } = req.body;
    const { vendasPorDia } = req.body;
    const { vencimento } = req.body;
    const { preco } = req.body;
    

    let sql = 'CALL sp_Produto_Salvar(?, ?, ?, ?, ?)';

    db.query( sql, [ nomeProduto, qtdProduto, vendasPorDia, vencimento, preco ], (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Erro ao salvar produto." });
        }
        res.status(200).send(result);
    });
};

export const verificarProduto = (req, res) => {
    const { nomeProduto } = req.body;

    let sql = 'CALL sp_Produto_Verificar(?)';

    db.query( sql, [ nomeProduto ], (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Erro ao verificar produto." });
        }
        res.status(200).send(result);
    });
};

export const salvarDestino = (req, res) => {
    const { nomeDestino } = req.body;
    const { qtdDestino } = req.body;

    let sql = 'CALL sp_Destino_Salvar(?, ?)';

    db.query( sql, [ nomeDestino, qtdDestino ], (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Erro ao salvar destino." });
        }
        res.status(200).send(result);
    });
};

export const promocaoProduto = (req, res) => {
    const { idProduto } = req.body;

    let sql = 'CALL sp_Produto_Promocao(?)';

    db.query( sql, [ idProduto ], (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Erro ao aplicar promoção." });
        }
        res.status(200).send(result);
    });
};

export const salvarProdutoDestino = (req, res) => {
    const { idProduto } = req.body;
    const { idDestino } = req.body;
    const { qtdProdutoDestino } = req.body;

    let sql = 'CALL sp_Produto_Destino(?, ?, ?)';

    db.query( sql, [ idProduto, idDestino, qtdProdutoDestino ], (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Erro ao destinar produtos." });
        }
        res.status(200).send(result);
    });
};

