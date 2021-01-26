import styled from "styled-components";

export const ProductList = styled.div`
  li {
    display: flex;
    flex-direction: column;
    background: #292e33;
    border-radius: 4px;
    padding: 20px;

    img {
      max-width: 220px;
      height: 220px;
    }

    button {
      background-color: var(--primary-color);

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
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleProduct = styled.text`
  color: #fff;
  line-height: 15px;
  font-size: 16px;
  padding: 10px;
`;

export const TitlePrice = styled.text`
  color: #dcc298;
  font-weight: bold;
  line-height: 15px;
  font-size: 20px;
  padding: 0 16px;
  margin-top: 30px;
`;

export const Title = styled.text`
  color: #fff;
  line-height: 13px;
  font-size: 16px;
  padding: 0 10px;
  margin-top: 20px;
`;

export const Bold = styled.text`
  color: #dcc298;
  font-weight: bold;
  line-height: 13px;
  font-size: 12px;
`;
