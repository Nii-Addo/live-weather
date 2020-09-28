import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import "../css/LoginCss.css";

const FormLoginInputField = styled.input`
  appearance: none;
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  color: rgb(34, 34, 34);
  display: block;
  font-size: 0.87rem;
  font-weight: 400;
  height: 0.5rem;
  letter-spacing: 0.012rem;
  margin-bottom: 20px;
  word-spacing: 0.16rem;
  width: 80%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(138, 138, 138);
  border-image: initial;
  border-radius: 2px;
  padding: 1rem;
`;

const SigninSubmitButton = styled.button`
  padding: 0.25em 1em;
  display: block;
  background: none;
  background-color: #00a400;
  border: none;
  box-shadow: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  height: 100%;
  width: 87%;
  overflow: hidden;
  padding-left: 32px;
  padding-right: 32px;
  text-shadow: none;
  transition: all 0.2s ease-out 0s;
  float: right;
  margin-right: 67px;

  &:hover {
    border: 1px solid;
  }
`;

const Login = (props) => {
  const [errorMessage, setErrorMessage] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const authState = useContext(AuthContext);
  const handleUsernameChange = (event) => {
    const username = event.target.value;
    setUsername(username);
  };
  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
  };
  const login = () => {
    if (username === "admin@test.com" && password === "password") {
      authState.setIsAuthenticated(true);
      setRedirectOnLogin(true);
    } else {
      authState.setIsAuthenticated(false);
      setErrorMessage("Wrong Email or password");
    }
  };

  return (
    <React.Fragment>
      {redirectOnLogin && <Redirect to="/" />}
      <div className="login-page">
        <div className="login-form">
          <h3 className="login-header">Login</h3>
          <form onSubmit={login}>
            <div>
              <FormLoginInputField
                name="username"
                type="email"
                placeholder="username"
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <FormLoginInputField
                name="password"
                type="password"
                placeholder="password"
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <SigninSubmitButton type="submit">Login</SigninSubmitButton>
            </div>
          </form>
          <div className="signup-link">
            <Link to="/registration" className="signup-footer-link">
              Sign up here
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
