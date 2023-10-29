import styled from "styled-components";
import Login from "./Login";

export const StyledLogin = styled(Login)`
  position: relative;
  width: 57%;
  height: 580px;
  border: 2px solid #fff;
  background-color: #fff;
  border-radius: 1rem;
  margin: 1rem;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);


  h1 {
    text-align: center;
    margin-bottom:2.4rem;
  }

  form {
    margin:5rem;
  }

  .input{
    display:block;
  }

  .input input{
    margin-top:.5rem;
    margin-bottom:.9rem;
    padding: 0.9rem;
    border-radius:1rem ;
  }

  .img{
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top:17.7rem;
    right: 6rem;

  }

  .checkbox{
    display: block;
  }
  .change {
    position:absolute;
    top:20rem;
    right:5rem;
  }

  .change a{
    text-decoration: none;
    cursor: pointer;
    color: #F78719;
  }

  .register {
    text-align: center;
  }

  .register a{
    text-decoration: none;
    cursor: pointer;
    color: #F78719;
  }

    button {
      display: block;
      margin: 1rem auto 0 auto;
      padding: .5rem 30%;
      background-color:#1575A7;
      border:1px solid #1575A7;
      border-radius: .2rem;
    }

    @media screen and (max-width:768px) {
      width: 100%;
      height: auto;
      position: relative;

    }

    @media screen and (max-width:500px) {
      
    }


  
`;
