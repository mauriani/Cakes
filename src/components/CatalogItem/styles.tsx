import styled from "styled-components";

export const Container = styled.ul`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;

  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
  }
`;
