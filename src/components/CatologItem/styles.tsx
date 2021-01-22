import styled from "styled-components";

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  background-color: #2196f3;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    strong {
      font-size: 20px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    button {
      background: #d22746;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.02s;

      span {
        flex: 1;
        align-items: center;
        justify-content: center;
        font-weight: bold;
      }
    }
  }
`;
