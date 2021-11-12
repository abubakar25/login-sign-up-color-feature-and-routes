import React, { useState } from "react";
import "./SignUpStyles.css";
import axios from "axios";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
// import { FaFacebookF } from "react-icons/fa";
// import { FaGooglePlusG } from "react-icons/fa";
// import { RiLinkedinFill } from "react-icons/ri";

function LoginFormPostRequest(props) {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/login");

    const { email, password } = state;

    const login = {
      email,
      password,
    };
    axios
      .post("http://localhost:3001/LoginFormPostRequestFunction", login)
      .then(() => console.log("Login"))
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: "#5bc0aa" }}>Sign In</h1>
          <div className="social-container">
            <a href="#7" className="social">
              <i className="fab fa-facebook-f">
                <FacebookIcon />
              </i>
            </a>
            <a href="#7" className="social">
              <i className="fab fa-google-plus-g">
                <GoogleIcon />
              </i>
            </a>
            <a href="#7" className="social">
              <i className="fab fa-linkedin-in">
                <LinkedInIcon />
              </i>
            </a>
          </div>
          <span>or use your account</span>
          <div style={{ width: "90%" }} className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <div style={{ width: "90%" }} className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <a href="#7">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPostRequest;
