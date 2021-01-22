import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&display=swap');

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box
}
#root {
  height: 110vh;
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
    font-family: 'Cabin', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  color: var(--title-color);
  font-family: 'Cabin', sans-serif;
}

 
  button {
    cursor: pointer;
  }
`;
