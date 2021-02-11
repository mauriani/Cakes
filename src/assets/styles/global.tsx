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
  --color-background:#191920;
  --color-text-title: #ffffff;
  --color-button-text: #ffffff;
  --color-primary: #8257e5;

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
