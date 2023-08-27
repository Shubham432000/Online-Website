import React from 'react';
import { useState } from 'react';

import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ authRegisterValid, authLogin }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const Validation = () => {
    if (!email) {
      alert('email required');
    } else if (!password) {
      alert('password required');
    } else if (email === authRegisterValid.email && password === authRegisterValid.password) {
      navigate('/productdetails');
      authLogin({ navVal: true });
    } else {
      alert('wrong password');
      // authLogin({ navVal: false });
      return false;
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
            <label className="label1">Email</label>
            <input className="input1" type="email" onChange={(e) => setEmail(e.target.value)} />

            <label className="label1">Password</label>
            <input
              className="input1"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="paginationbutton2" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
