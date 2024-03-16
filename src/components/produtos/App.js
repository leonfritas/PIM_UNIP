import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderSide from "../HeaderSide";
import Form from "./Form";
import GlobalStyle from "./styleForm";
import Grid from "./grid";
import axios from "axios";


const Container = styled.div`
  position: fixed;

  top: 60%;

  left: 55%;

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
      const res = await axios.get('http://localhost:4000/');
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
        <Form />
        <Grid products={products} />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
