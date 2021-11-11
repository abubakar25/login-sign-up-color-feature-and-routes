import React, { useState } from "react";
import axios from "axios";

function PostDataForm(props) {
  const [state, setState] = useState({
    name: "",
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

    const { name, email, password } = state;

    const book = {
      name,
      email,
      password,
    };

    axios
      .post("http://localhost:3001/signUpFunction", book)
      .then(() => console.log("Book Created"))
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div>
        <br />
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: "30%" }}>
              <button className="btn btn-success" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostDataForm;
