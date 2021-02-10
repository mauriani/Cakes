import styled from "styled-components";

export const ProductList = styled.div`
  li {
    display: flex;
    flex-direction: column;
    background: #292e33;
    border-radius: 4px;
    padding: 20px;

    button {
      background-color: var(--primary-color);

      border: 0;
      border-radius: 4px;
      overflow: hidden;
      height: 40px;
      width: auto;

      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      margin-left: 30px;
      margin-right: 30px;

      text-transform: uppercase;
      font-size: 16px;
      font-weight: bold;
      color: #fff;

      transition: background 0.02s;
    }
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 120px;
    height: 120px;
  }
  div {
    margin-left: 50px;

    text {
      font: 700 1rem Archivo;
      font-size: 1rem;
      line-height: 1.6rem;
      color: #fff;
    }

    strong {
      font: 400 1rem Archivo;
      display: block;
      color: #fff;
      line-height: 1.6rem;
    }
  }
`;
