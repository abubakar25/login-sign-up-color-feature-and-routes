import React, { useState } from "react";
import "./SignUpStyles.css";
import LoginFormPostRequest from "./LoginFormPostRequest";
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
import burger from "../src/images/burger.jpg";
// import { FaFacebookF } from "react-icons/fa";
// import { FaGooglePlusG } from "react-icons/fa";
// import { RiLinkedinFill } from "react-icons/ri";

function PostDataForm(props) {
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [state1, setState1] = useState({
    maskStyle: {
      left: 512,
      right: 0,
    },
  });
  const container = React.createRef();

  function onSignUp() {
    container.current.classList.add("right-panel-active");
  }
  function onSignIn() {
    debugger;
    container.current.classList.remove("right-panel-active");
  }

  const clipValue = `inset(0 ${state1.maskStyle.left}px 0 ${state1.maskStyle.right}px)`;

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/signup");

    const { name, email, password } = state;

    const signUpValues = {
      name,
      email,
      password,
    };

    axios
      .post("http://localhost:3001/SignUpFormPostRequestFunction", signUpValues)
      .then(() => console.log("Sign Up"))
      .catch((err) => {
        console.error(err);
      });
    console.log(signUpValues);
  };

  return (
    <div>
      <div className="container" id="container" ref={container}>
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit}>
            <h1 style={{ color: "#5bc0aa" }}>Create Account</h1>
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
            <span>or use your email for registration</span>
            <div style={{ width: "90%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
                required
              />
            </div>
            <br />
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

            <button type="submit">Sign Up</button>
          </form>
        </div>
        <LoginFormPostRequest />
        <div className="overlay-container ">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>

              <p>
                To keep connected with us please login with your personal info
              </p>
              <div className="div4"></div>
              <button className="ghost" id="signIn" onClick={onSignIn}>
                Sign In
              </button>
              <div className="div2"></div>
              <div className="div3"></div>
              <div className="div6"></div>
              <div className="div1"></div>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={onSignUp}>
                Sign Up
              </button>
              <div className="div2"></div>
              <div className="div3"></div>
              <div className="div4"></div>
              <div className="div5"></div>
              <div className="div6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDataForm;
