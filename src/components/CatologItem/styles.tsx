import styled from "styled-components";

export const ProductList = styled.div`
  li {
    display: flex;
    flex-direction: column;
    background: var(--color-background-secondary);
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      width: 270px;
      height: 270px;
      border-radius: 8px;
    }

    strong {
      margin-top: 10px;
      padding: 0 16px;
      font: 700 1rem Archivo;
      font-size: 1rem;
      line-height: 1.6rem;
      color: var(--color-text-title);
    }

    legend {
      margin-top: 10px;
      padding: 0 16px;
      font: 400 1rem Archivo;
      font-size: 1rem;
      line-height: 1.6rem;
      padding-bottom: 1.6rem;
      color: var(--color-text-title);
    }

    span {
      margin-top: 10px;
      padding: 0 16px;
      font: 700 1rem Archivo;
      display: block;
      color: var(--color-text-title);
      line-height: 1.6rem;
    }

    button {
      background-color: var(--color-primary);

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
