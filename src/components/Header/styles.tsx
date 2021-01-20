import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #343a40;
`;

export const ContainerPages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-decoration: none;
  img {
    height: 50px;
    width: 90px;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;

  div {
    display: flex;
    flex-direction: row;
  }

  strong {
    display: block;
    font-size: 15px;
    color: var(--text-color);
    margin-right: 20;
    font-family: Ubuntu;
  }
`;

export const Title = styled.h6`
  font-size: 15px;
  color: var(--text-color);
  font-weight: bold;
  margin-left: 20px;
`;
