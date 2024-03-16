import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderSide from "../HeaderSide";
import Form from "./Form";
import GlobalStyle from "./styleForm";
import Grid from "./grid";
import axios from "axios";
import { toast, ToastContainer, POSITION } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Container = styled.div`
  position: absolute;

  top: 35%;

  left: 56%;

  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  aling-items: center;
  gap: 10px;
  justify-content: center;
`;

const Title = styled.h1`
  justify-content: center;
`;
function App() {
  const [products, setProducts] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getProducts = async () => {

    try {
      const res = await axios.get('http://localhost:4001/');
      setProducts(res.data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect( ()=> {
    getProducts()
  }, [setProducts])
  return (
    <>
      <HeaderSide />
      <Container>
        <Title>Cadastro de Produtos</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getProducts={getProducts}/>
        <Grid products={products} setProducts={setProducts} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default App;
