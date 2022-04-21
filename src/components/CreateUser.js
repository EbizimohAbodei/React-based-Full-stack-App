import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CreateUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleSummit = (e) => {
    axios.post("http://localhost:8005/api", inputs).then(function (response) {
      // console.log(response.data);
    });
    e.preventDefault();
    navigate("/");
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <div className="createContainer">
      <div>
        <h1 className="title">Create User</h1>
      </div>
      <div>
        <form className="createForm" onSubmit={handleSummit}>
          <div className="labelInput">
            <label>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
            ></input>
          </div>
          <div className="labelInput">
            <label>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            ></input>
          </div>
          <div className="labelInput">
            <label>Mobile:</label>
            <input
              type="number"
              id="mobile"
              name="mobile"
              onChange={handleChange}
            ></input>
          </div>
          <input
            className="saveButton"
            name="save"
            type="submit"
            value="Save"
          ></input>
        </form>
      </div>
    </div>
  );
}
