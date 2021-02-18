import styled from "styled-components";

export const Landing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 1100px) {
    max-width: 1100px;
  }

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      text-align: initial;
      color: var(--color-text-title);
      padding: 3.2rem 2rem;
      font: 400 2.4rem Archivo;
    }

    p {
      text-align: initial;
      padding: 3.2rem 2rem;
      color: var(--color-text-title);
      font: 1rem Archivo;
      line-height: 1.5rem;
    }

    .acc-catalog {
      text-decoration: none;
      padding: 0 6.4rem;
    }

    .acc-catalog button {
      width: 20rem;
      height: 5.6rem;

      background-color: var(--color-primary);
      text-decoration: none;
      border-radius: 0.8rem;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      color: var(--color-text-title);
      font: 700 1.4rem Archivo;
      transition: background-color 0.2s;
    }

    .acc-catalog button:hover {
      background-color: var(--color-primary-dark);
    }
  }

  .image {
    width: 50%;
    align-self: center;
    padding: 3.2rem 2rem;

    img {
      width: 100%;
    }
  }
`;
