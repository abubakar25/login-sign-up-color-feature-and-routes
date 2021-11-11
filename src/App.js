import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import PostDataForm from "./PostDataForm";
import SignUpFormPostRequest from "./SignUpFormPostRequest";
import LoginFormPostRequest from "./LoginFormPostRequest";

import LoginRedirect from "./LoginRedirect";
import SignUpRedirect from "./SignUpRedirect";

function App() {
  return (
    <div>
      {/* <PostDataForm /> */}
      <SignUpFormPostRequest />
      {/* <Router>
        <Switch>
          <Route path="/login">
            <LoginFormPostRequest />
          </Route>
          <Route path="/signupRedirect">
            <SignUpRedirect />
          </Route>
          <Route path="/loginRedirect">
            <LoginRedirect />
          </Route>
          <Route path="/">
            <SignUpFormPostRequest />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
