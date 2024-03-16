import React, { useRef } from "react";
import styled from "styled-components";
import GlobalStyle from "./styleForm";

const FormContainer = styled.form`
display: flex;
align-items: flex-end;
gap: 10px;
flex-wrap: wrap;
padding: 20px;
box-shadow: 0px 0px 10px black;
border-radius: 5px;
font-weight: bolder;  
background-color: #1d2634;
color: white
`


const InputArea = styled.div`
display: flex;
flex-direction: column;
`

const Label = styled.label`
 color: white;
 margin-bottom: 5px;
 `

const Input = styled.input`
width: 120px;
padding: 0 10px;
border: 1px solid #bbb;
border-radius: 5px;
height: 40px;
`

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    font-weight: bolder;  
    height: 42px;
`

const Form = ({ onEdit }) => {

    const ref = useRef()


    return (
        <FormContainer>
        <InputArea>
            <Label>NOME</Label>
            <Input nome="" type="text"/>
        </InputArea>
        <InputArea>
            <Label>Preço</Label>
            <Input nome="" type="text"/>
        </InputArea>
        <InputArea>
            <Label>Estoque</Label>
            <Input nome="" type="text"/>
        </InputArea>
        <Button type="submit">SALVAR</Button>

      <GlobalStyle/>
        </FormContainer>

    )
}

export default Form;