import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 50vw;
    padding: 10px;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
      color: var(--color-text-title);
      padding: 0 16px;
      font-family: "Archivo_400Regular";
    }

    p {
      text-align: initial;
      margin-top: 10px;
      padding: 0 20px;
      color: var(--color-text-title);
      font: 1rem Archivo;
      line-height: 1.5rem;
    }

    .acc-catalog {
      display: flex;
      align-items: center;
      margin-top: 20px;
    }

    .acc-catalog a {
      width: 260px;
      height: 56px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: var(--color-primary);
      text-decoration: none;
      border-radius: 0.8rem;

      text-decoration: none;
      color: #fff;
      font: 1rem Archivo;

      transition: background-color 0.2s;
    }
  }

  img {
    width: auto;
  }
`;
