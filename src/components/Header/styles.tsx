import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #343a40;

  img {
    height: 80px;
    width: 80px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px;

  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
  }

  strong {
    display: block;
    color: #fff;
    font: 700 1rem Archivo;
  }
  span {
    color: #999;
    font: 400 1rem Archivo;
  }
`;
