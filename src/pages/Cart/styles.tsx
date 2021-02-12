import styled from "styled-components";

export const Container = styled.div``;

export const ProductTable = styled.div`
  background-color: var(--color-background-secondary);
  width: 1000px;
  height: auto;
  padding: 0 20px 50px;
  margin: 20px auto;
  border-radius: 8px;

  thead th {
    color: #fff;
    text-align: left;
    padding: 12px;
    font: 700 1rem Archivo;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
    border-radius: 8px;
  }

  strong {
    color: #fff;
    font: 500 0.8rem Poppins;
    display: block;
  }

  span {
    color: #fff;
    font: 500 1rem Poppins;
    display: block;
    margin-top: 10px;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div``;
