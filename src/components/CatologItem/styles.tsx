import styled from "styled-components";

export const ProductList = styled.div`
  li {
    display: flex;
    flex-direction: column;
    background: var(--color-background-secondary);

    margin-top: 1rem;
    padding: 1rem;
    overflow: hidden;

    img {
      align-self: center;
      width: 270px;
      height: 270px;
      border-radius: 8px;
    }

    strong {
      font: 700 1rem Archivo;
      margin-top: 0.8rem;
      padding: 0 1rem;
      line-height: 1.6rem;
      color: var(--color-text-title);
    }

    legend {
      margin-top: 0.8rem;
      padding: 0 1rem;
      font: 400 1rem Archivo;
      line-height: 1.6rem;
      padding-bottom: 1.6rem;
      color: var(--color-text-title);
    }

    span {
      display: block;

      margin-top: 0.8rem;
      padding: 0 1rem;
      font: 700 1rem Archivo;
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
