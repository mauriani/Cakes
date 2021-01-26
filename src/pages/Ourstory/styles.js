import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  div {
    padding: 20px;
    h1 {
      font-size: 20px;
      padding: 0 16px;
      line-height: 20px;
    }
    p {
      font-size: 18px;
      color: #fff;
      line-height: 25px;
      margin-top: 20px;
      padding: 0 18px;
    }
  }

  div {
    img {
      height: 500px;
      width: 650px;
    }
  }
`;
