import { useState } from "react";
import { StyledInput } from "../components/Input.style";
import Input from "../components/Input.component";

import abc from "../assets/eye-slash-solid.svg";
 
const Login = ({className}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, query) => {
    const { value } = e.target;
    if (query === "email") setEmail(value);
    if (query === "password") setPassword(value);
  };

  return (
    <>
      <div className={className}>
        <form >
        <h1 >Login</h1>
          <label className="input" htmlFor="id_e">
            Login ID
            <StyledInput
              id="id_e"
              type="email"
              handleChange={(e) => handleChange(e, "email")}
              vlaue={email}
              placeholder= "Enter Login ID"
            />
          </label>
          <label className="input" htmlFor="ide_p">
            Password <b />
            <StyledInput
              id="id_p"
              type="password"
              handleChange={(e) => handleChange(e, "password")}
              value={password}
              placeholder="Enter Password"
          />
          <img className="img" style={{width:"20px", height:"20px"}} src={abc} alt="" />
          </label>
          <label  className="checkbox" htmlFor="remember">
            <Input type="checkbox" id="remember" />&nbsp;
            Remember me
          </label>
          <span className="change" >
            <a href="#" >change password</a>
          </span>
          <label className="checkbox" htmlFor="term">
            <Input type="checkbox" id="term" />&nbsp;
            Agree to Terms & Conditions
          </label><br />
          <button >Login</button>
          <div className="register" >Don't have a account?
            <a href="#" >Register here</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
