import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  background-color: #343a40;

  .div-img {
    img {
      height: 80px;
      width: 80px;
    }
  }

  .div-acc {
  }

  .div-acc a {
    color: #fff;
    display: block;
    text-decoration: none;
    font: 700 1rem Archivo;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;
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
