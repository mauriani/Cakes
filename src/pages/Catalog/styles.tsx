import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  border-radius: 4px;
  padding: 0 20px 50px;
  margin: 20px auto;
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  background: var(--color-background);
`;
