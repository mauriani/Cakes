import styled from "styled-components";

export const ProductList = styled.div`
  padding: 10px;
  li {
    display: flex;
    flex-direction: column;
    background: #292e33;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 200px;
      height: 200px;
    }

    strong {
      font-size: 16px;
      line-height: 20px;
      color: #fff;
      margin-top: 5px;
    }

    span {
      color: #fff;
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background-color: var(--primary-color);

      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      height: 40px;

      display: flex;
      align-items: center;
      justify-content: center;

      text-transform: uppercase;
      font-size: 16px;
      font-weight: bold;
      color: #fff;

      transition: background 0.02s;
    }
  }
`;
