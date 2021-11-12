import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./auth-context";

import axios from "axios";

function SignUpRedirect(props) {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState();

  // console.log(props.signUpValues);

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://localhost:3001/SignUpFormPostRequestFunction",

  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   })
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //     });
  //   // console.log(data);
  // }, []);
  return (
    <div>
      <h1>Welcome,Thank you for signing up to our site</h1>
      <div>
        {/* <h2>List of users that signed up</h2> */}
        {/* <div>user name:{props.signUpValues.name}</div>
        <div>user email:{props.signUpValues.email}</div>
        <div>user password:{props.signUpValues.password}</div> */}
      </div>
    </div>
  );
}

export default SignUpRedirect;
