import { useState, useEffect } from "react"
import Axios from "axios";

export default function Vencimento(){

    const [ adicionarProduto, setAdicionarProduto ] = useState(false);
    const [ adicionarDestino, setAdicionarDestino ] = useState(false);
    const [ listarProduto, setListarProduto ] = useState(false);
    const [ listarDestino, setListarDestino ] = useState(false);
    const [ verificarVencimento, setVerificarVencimento ] = useState(false);
    const [ produto, setProduto ] = useState();
    const [ destino, setDestino ] = useState();
    const [ nomeProduto, setNomeProduto ] = useState();
    const [ qtdProduto, setQtdProduto ] = useState();
    const [ vendasPorDia, setVendasProdDia ] = useState();
    const [ vencimento, setVencimento ] = useState();
    const [ preco, setPreco ] = useState();
    const [ nomeDestino, setNomeDestino ] = useState();
    const [ qtdDestino, setQtdDestino ] = useState();
    const [ produtoAVencer, setProdutoAVencer ] = useState();
    const [ destinar, setDestinar ] = useState(false);
    const [ idProdutoDestino, setIdProdutoDestino ] = useState();
    const [ qtdProdutoDestino, setQtdProdutoDestino ] = useState();
    const [ idDestino, setIdDestino ] = useState(); 


    useEffect(() => {
        selecionarProduto();
    }, [])

    function selecionarProduto(){
        Axios.post("http://localhost:5000/produto/selecionarproduto", {
            idProduto: null
        }).then((response) => {
            setProduto(response.data)
        })
    }

    useEffect(() => {
        selecionarDestino();
    }, [])

    function selecionarDestino(){
        Axios.post("http://localhost:5000/destino/selecionardestino", {
            idDestino: null
        }).then((response) => {
            setDestino(response.data)
        })
    }    

    function salvarProduto() {
        const vencimentoFormatado = new Date(vencimento).toISOString().split('T')[0];
    
        Axios.post("http://localhost:5000/produto/salvarProduto", {
            nomeProduto: nomeProduto,
            qtdProduto: qtdProduto,
            vendasPorDia: vendasPorDia,
            vencimento: vencimentoFormatado,
            preco: preco
        }).then((response) => {
            console.log(response.data);
        });
    }
    function salvarDestino(e) {       
        e.preventDefault();

        Axios.post("http://localhost:5000/destino/salvarDestino", {
            nomeDestino: nomeDestino,
            qtdDestino: qtdDestino,
        }).then((response) => {
            console.log(response.data);
        });
    }    

    function verificarProduto(){
        setListarDestino(false);
        setAdicionarProduto(false);
        setAdicionarDestino(false);
        setListarProduto(false);
        //
        setVerificarVencimento(!verificarVencimento);
        //
        Axios.post("http://localhost:5000/produto/verificarProduto",{
            nomeProduto: null
        }).then((response) => {            
            console.log(response.data[0])
            setProdutoAVencer(response.data[0]);
        })
    }

    function ativarPromocao(idProduto){
        Axios.post("http://localhost:5000/produto/promocaoProduto",{
            idProduto: idProduto
        }).then((response) => {                        
            setProdutoAVencer(response.data[0]);
        })    

        alert('Promoção aplicada com sucesso.');
        setVerificarVencimento(false);
    }

    function destinarProduto(idProdutoDestino, qtdProdutoDestino){
        setIdProdutoDestino(idProdutoDestino);
        setQtdProdutoDestino(qtdProdutoDestino);
        setDestinar(true);
    }

    function salvarProdutoDestinado(){
        Axios.post("http://localhost:5000/produto/salvarProdutoDestino",{
            idProduto: idProdutoDestino,
            idDestino: idDestino,
            qtdProdutoDestino: qtdProdutoDestino
        }).then((response) => {                        
            alert('Produtos Destinados.')
        })           
    }

    const handleDestinoChange = (e) => {
        setIdDestino(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault(); 
        salvarProdutoDestinado(idDestino);
      };

    function handleAdicionarProduto(){
        setAdicionarProduto(!adicionarProduto);            
        setAdicionarDestino(false);
        setListarProduto(false);
        setListarDestino(false);
        setVerificarVencimento(false);
    }

    function handleAdicionarDestino(){
        setAdicionarDestino(!adicionarDestino);                 
        setAdicionarProduto(false);
        setListarProduto(false);
        setListarDestino(false);
        setVerificarVencimento(false);
    }

    function handleListarProduto(){
        setListarProduto(!listarProduto)
        setAdicionarProduto(false);
        setAdicionarDestino(false);
        setListarDestino(false);
        setVerificarVencimento(false);
    }

    function handleListarDestino(){
        setListarDestino(!listarDestino)
        setAdicionarProduto(false);
        setAdicionarDestino(false);
        setListarProduto(false);
        setVerificarVencimento(false);
    }    
    
    return(
        

        <div class="md:flex">
            <ul class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
            <li>
                <button
                    onClick={() => handleAdicionarProduto()}
                    className={`inline-flex items-center px-4 py-3 text-white rounded-lg w-full active ${adicionarProduto ? 'bg-blue-700 dark:bg-blue-600' : 'bg-gray-50 dark:bg-gray-800'}`}
                    aria-current="page"
                >
                    <svg className="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    Adicionar Produto
                </button>
            </li>

            <li>
                <button
                    onClick={() => handleAdicionarDestino()}
                    className={`inline-flex items-center px-4 py-3 rounded-lg w-full hover:text-gray-900 ${adicionarDestino ? 'bg-blue-700 dark:bg-blue-600' : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700'}`}
                >
                    <svg className="w-4 h-4 me-2 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                    </svg>
                    Adicionar Destino
                </button>
            </li>

            <li>
                <button
                    onClick={() => handleListarProduto()}
                    className={`inline-flex items-center px-4 py-3 rounded-lg w-full hover:text-gray-900 ${listarProduto ? 'bg-blue-700 dark:bg-blue-600' : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700'}`}
                >
                    <svg className="w-4 h-4 me-2 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
                    </svg>
                    Listar Produtos
                </button>
            </li>

            <li>
                <button
                    onClick={() => handleListarDestino()}
                    className={`inline-flex items-center px-4 py-3 rounded-lg w-full hover:text-gray-900 ${listarDestino ? 'bg-blue-700 dark:bg-blue-600' : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700'}`}
                >
                    <svg className="w-4 h-4 me-2 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z"/>
                        <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z"/>
                    </svg>
                    Listar Destinos
                </button>
            </li>

            <li>
                <button
                    onClick={() => verificarProduto()}
                    className={`inline-flex items-center px-4 py-3 rounded-lg w-full hover:text-gray-900 ${verificarVencimento ? 'bg-blue-700 dark:bg-blue-600' : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700'}`}
                >
                    <svg className="w-4 h-4 me-2 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z"/>
                        <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z"/>
                    </svg>
                    Verificar Produtos
                </button>
            </li>

            </ul>
            <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                {
                    adicionarProduto?

                        <form className="max-w-sm mx-auto">
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Produto</label>
                                <input onChange={((e) => setNomeProduto(e.target.value))} type="text" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantidade</label>
                                <input onChange={((e) => setQtdProduto(e.target.value))} type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vendas por dia</label>
                                <input onChange={((e) => setVendasProdDia(e.target.value))} type="text" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vencimento</label>
                                <input
                                    type="date"
                                    onChange={(e) => setVencimento(e.target.value)}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                />
                            </div>        
                        
                            <div className="mb-5">
                                <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preço</label>
                                <input onChange={((e) => setPreco(e.target.value))} type="text" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>                 
                            
                            <button type="submit" onClick={() => salvarProduto()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>
                        </form>
                :''}                
                {
                    adicionarDestino?
                    <form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Destino</label>
                            <input onChange={((e) => setNomeDestino(e.target.value))} type="text" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantidade</label>
                            <input onChange={((e) => setQtdDestino(e.target.value))} type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <button type="submit" onClick={() => salvarDestino()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>
                    </form>
                :''}            
                {
                    listarProduto?

                            <div className="w-full p-10">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Produto
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Vencimento
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Vendas Por dia
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Preço
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Quantidade
                                            </th>
                                        </tr>
                                    </thead>
                                    {produto?.map((index) => {
                                        return(
                                            <tbody key={index.idProduto}>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {index.nomeProduto}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                    {new Date(index.dataValidade).toLocaleDateString('pt-BR')}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {index.vendasPorDia}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {index.precoProduto}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {index.qtdProduto}
                                                    </td>
                                                </tr>         
                                            </tbody>
                                            )
                                        })}
                                </table>
                            </div>
                :''}                
                {
                    listarDestino?
                        <div className="w-full p-10">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Destino
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Quantidade Destinada
                                        </th>
                                    </tr>
                                </thead>
                                {destino?.map((index) => {
                                    return(
                                        <tbody>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {index.nomeDestino}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {index.quantidadeDestinado}
                                                </td>
                                            </tr>         
                                        </tbody>
                                        )
                                    })}
                            </table>
                        </div>
                :''}                  
                {
                    verificarVencimento?
    
                        <div className="w-full p-10">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Produto
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Vencimento
                                        </th>                                    
                                        <th scope="col" className="px-6 py-3">
                                            Vendas por dia
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Dias Restantes
                                        </th>                                      
                                        <th scope="col" className="px-6 py-3">
                                            Quantidade em estoque
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Preço
                                        </th>  
                                        <th scope="col" className="px-6 py-3">
                                            Disponível
                                        </th>         
                                        <th scope="col" className="px-6 py-3">
                                            Ação
                                        </th>                                                                                                  
                                    </tr>
                                </thead>
                                {
                                    produtoAVencer?.map((index) => {
                                        return(
                                            <tbody key={index.idProduto}>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {index.nomeProduto}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                    {new Date(index.dataValidade).toLocaleDateString('pt-BR')}
                                                    </td>                                                
                                                    <td className="px-6 py-4">
                                                        {index.vendasPorDia}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {index.diasRestantes}
                                                    </td>                                                   
                                                    <td className="px-6 py-4">
                                                        {index.qtdProduto}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {index.precoProduto}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {index.qtdDisponivel}
                                                    </td>       
                                                    <td className="px-6 py-4">
                                                    {index.ativoPromocao === 1 ? 
                                                        <button 
                                                            onClick={() => ativarPromocao(index.idProduto)} 
                                                            className="text-white bg-green-700 hover:bg-green-700 font-medium rounded-lg text-sm px-4 py-2"
                                                        >
                                                            Promoção
                                                        </button>
                                                    : 
                                                        <button 
                                                            onClick={() => destinarProduto(index.idProduto, index.qtdDisponivel)} 
                                                            className="text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2"
                                                        >
                                                            Destinar
                                                        </button>
                                                    }
                                                    </td>                                                                                           
                                                </tr>         
                                            </tbody>

                                        )
                                    })
                                }
                                
                            </table>
                        </div>
                :''} 
            {destinar ? (
                <div>                    
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
                                        
                    <div
                        id="crud-modal"
                        tabIndex="-1"
                        aria-hidden="true"
                        className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto"
                    >
                        <div className="bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-md mx-auto p-4">
                            {/* Modal content */}
                            <div className="bg-white rounded-lg shadow dark:bg-gray-700">
                                {/* Modal header */}
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Escolha um Destino
                                    </h3>
                                    <button
                                        type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-toggle="crud-modal"
                                        // onClick={toggleModal} // Função para fechar o modal
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                            onClick={() => setDestinar(false)}
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="category"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Destino
                                        </label>
                                        <select
                                            id="category"
                                            value={idDestino} 
                                            onChange={handleDestinoChange} 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        >
                                            <option value="">Selecione um destino</option>
                                            {
                                            destino?.map((index) => (
                                                <option key={index.idDestino} value={index.idDestino}>
                                                {index.nomeDestino}
                                                </option>
                                            ))
                                            }
                                        </select>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Destinar Produtos
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
           
        ) : (
            ""
        )}
             </div>
        </div>

        
    )
}