import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import GlobalStyle from "./styleForm";
import { toast } from "react-toastify";
import axios from "axios";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 90px;
  flex-wrap: wrap;
  padding: 20px;
  box-shadow: 0px 0px 10px black;
  border-radius: 5px;
  font-weight: bolder;
  background-color: #1d2634;
  color: black;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 110px;
  padding: 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  font-weight: bolder;
  height: 42px;
`;

const Form = ({ getProducts, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const product = ref.current;

      product.nome.value = onEdit.nome;
      product.preco.value = onEdit.preco;
      product.estoque.value = onEdit.estoque;
    }
  }, [onEdit]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = ref.current;

    if (!product.nome.value || !product.preco.value || !product.estoque.value) {
      return toast.warn("Preencha todos os campos!!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:4001/" + onEdit.id, {
          nome: product.nome.value,
          preco: product.preco.value,
          estoque: product.estoque.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:4001", {
          nome: product.nome.value,
          preco: product.preco.value,
          estoque: product.estoque.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    product.nome.value = "";
    product.preco.value = "";
    product.estoque.value = "";

    setOnEdit(null);

    getProducts();
  };
  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>NOME</Label>
        <Input name="nome" type="text" />
      </InputArea>
      <InputArea>
        <Label>Preço</Label>
        <Input name="preco" type="text" />
      </InputArea>
      <InputArea>
        <Label>Estoque</Label>
        <Input name="estoque" type="text" />
      </InputArea>
      <Button type="submit">SALVAR</Button>

      <GlobalStyle />
    </FormContainer>
  );
};

export default Form;
