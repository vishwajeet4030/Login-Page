import styled from "styled-components";


export const GlobalStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Poppins", sans-serif;
  }

  @media screen and (max-width:500px) {
      html{
        font-size: 50%;
      }
    }

`;
