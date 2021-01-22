import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  img {
    height: 95vh;
    border-radius: 5px;
    padding: 10px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  h1 {
    font-size: 40px;
    color: var(--text-color);
    font-family: "Cabin";
  }

  p {
    margin-top: 30px;
    font-size: 20px;
    color: var(--text-color);
    line-height: 25px;
    font-family: "Cabin";
  }
`;
