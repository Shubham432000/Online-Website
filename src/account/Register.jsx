import React, { useState } from "react";
import "../styles/Register.css";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const Validation = () => {
    if (!name) {
      alert("Name required");
    } else if (!email) {
      alert("Email required");
    } else if (!mobile) {
      alert("mobile required");
    } else if (!password) {
      alert("password required");
    }
  };
  const submit = (e) => {
    e.preventDefault();
    Validation();
  };

  return (
    <>
      <div className="head1">
        <div className="head2">
          <form onSubmit={submit}>
            <label className="label1">Name</label>
            <input className="input1" type="text" onChange={(e) => setName(e.target.value)} />
            <label className="label1">Email</label>
            <input
              className="input1"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label1">Mobile</label>
            <input
              className="input1"
              type="number"
              onChange={(e) => setMobile(e.target.value)}
            />
            <label className="label1">Password</label>
            <input
              className="input1"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button1" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
