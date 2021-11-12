import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import PostDataForm from "./PostDataForm";
import SignUpFormPostRequest from "./SignUpFormPostRequest";
import LoginFormPostRequest from "./LoginFormPostRequest";

import LoginRedirect from "./LoginRedirect";
import SignUpRedirect from "./SignUpRedirect";

function App(props) {
  return (
    <div>
      {/* <PostDataForm /> */}
      {/* <SignUpFormPostRequest /> */}
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginRedirect />
          </Route>
          <Route exact path="/signup">
            <SignUpRedirect />
          </Route>
          <Route path="/">
            <SignUpFormPostRequest />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
