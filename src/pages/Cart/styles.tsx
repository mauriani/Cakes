import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  background-color: var(--color-background-secondary);
  width: 1000px;
  height: auto;
  padding: 0 20px 50px;
  margin: 20px auto;
  border-radius: 8px;

  span {
    padding-top: 50px;
    text-align: center;

    color: #fff;
    font: 700 1rem Poppins;
    display: block;

    div {
      margin-top: 20px;
    }
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: var(--color-primary);
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#8257e5")};
      }
    }
  }
`;

export const ProductTable = styled.div`
  width: 100%;

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
  }

  span {
    display: block;
    color: #fff;
    font: 500 1rem Poppins;
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

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: var(--color-text-title);
    font: 700 1rem Archivo;
  }

  strong {
    color: var(--color-text-title);
    font: 400 1.5rem Archivo;
    margin-left: 5px;
  }
`;
