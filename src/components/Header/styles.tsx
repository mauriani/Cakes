import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  background-color: var(--color-background-header);

  .div-link {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
      height: 80px;
      width: 80px;
    }

    a {
      text-decoration: none;
      display: block;
      color: var(--color-text-title);
      font: 700 1rem Archivo;
      margin-left: 2rem;
    }
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
    color: var(--color-text-title);
    font: 700 1rem Archivo;
  }
  span {
    color: #999;
    font: 400 1rem Archivo;
  }
`;
