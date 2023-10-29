import styled from "styled-components";


export const AppContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:space-between;
  height: 600px;

  @media screen and (max-width:768px) {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  
`