import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box
}
:root {
  --primary-color: #d22746;
  --title-color: #f8f9fa;
  --text-color: #f8f9fa;
}

  body{
    background-color:#212529
  }

  body,
  input,
  button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  color: var(--title-color);
  font-family: Ubuntu;
}

 
  button {
    cursor: pointer;
  }
`;
