import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

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
  --color-background:#191920;
  --color-background-secondary: #1e222b;
  --color-background-header: #343a40;
  --color-text-title: #ffffff;
  --color-button-text: #ffffff;
  --color-primary: #8257e5;
  --color-primary-dark: #774dd6;
}

html, body, #root{
    min-height: 100%;
  }

  body{
    background-color:#191920
  }

 
  button {
    cursor: pointer;
  }
`;
