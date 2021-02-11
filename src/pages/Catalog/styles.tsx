import styled from "styled-components";

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  background: var(--color-background);
`;
