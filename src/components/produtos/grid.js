import React from "react";
import styled from "styled-components";
import { FaTrash, FaEdit } from 'react-icons/fa'
import axios from "axios";
import { toast } from 'react-toastify'

const Thead = styled.thead``;
const Tbody = styled.tbody``;

const Table = styled.table`
  width: 100%;
  box-shadow: 0px 0px 10px black;
  padding: 20px;
  background-color: #fff;
  box-sizing: 0 0 5px #ccc;
  border-radius: 5px;
  max-width: 800px;
  margin-top: 5px;
  word-break: break-all;
  font-weight: bolder;
  background-color: #1d2634;
  position: absolute;
  top: 180px;
`;
const Tr = styled.tr``;
const Th = styled.tr`
  display: table-cell;
  text-align: start;
  
  padding: 10px;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: inset;
`;

const Grid = ({ products, setProducts, setOnEdit }) => {
   
  const handleDelete = async (id) => {
    await axios.delete('http://localhost:4002/' + id)
    .then( ( {data} ) => {
      const newArray = products.filter( (product) => product.id !== id) 

      setProducts(newArray)
      toast.success(data)
    })
    .catch (( {data} ) => toast.error(data))

    setOnEdit(null)
  }
  const handleEdit = (item) => {
    setOnEdit(item)
}
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>NOME </Th>
          <Th>Preço</Th>
          <Th>Estoque </Th>
        </Tr>
      </Thead>

      <Tbody>
        {products.map((item, i) => (
          <Tr key={i}>
            <Td width="30%"> {item.nome}</Td>
            <Td width="30%"> {item.preco}</Td>
            <Td width="30%"> {item.estoque}</Td>
            <Td>
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td>
              <FaTrash cursor="pointer"  onClick={ () => handleDelete(item.id) }/>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
