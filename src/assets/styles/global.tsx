import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#root {
  font-size: 60%;

  --color-background:#191920;
  --color-background-secondary: #1e222b;
  --color-text-title: #ffffff;
  --color-button-text: #ffffff;
  --color-primary: #8257e5;
 

}

  html,
  body,
  #root {
    height: 100vh;
  }

  body{
    background-color:#191920
  }

  #root {
  display: flex;
  align-items: center;
  justify-content: center;
}

body,
input,
button,
textarea {
  font: 500 1.6rem Poppins;
  color: var(--color-text-title);
}

  button {
    cursor: pointer;
  }

  @media (min-width: 700) {
  :root {
    font-size: 62.5%;
  }
}
`;
