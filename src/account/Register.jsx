import React, { useState } from 'react';

import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';

const Register = ({ authRegister }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const Validation = () => {
    if (!name) {
      alert('Name required');
      return false;
    } else if (!email) {
      alert('Email required');
      return false;
    } else if (!mobile) {
      alert('mobile required');
      return false;
    } else if (!password) {
      alert('password required');
      return false;
    }else{
      return true
    }
  };
  const submit = (e) => {
    e.preventDefault();
    
    if (Validation()) {
      authRegister({ name, email, mobile, password });
      navigate('/login');
    }
  };

  return (
    <>
      <div className="head1">
        <div className="head2">
          <form onSubmit={submit}>
            <label className="label1">Name</label>
            <input className="input1" type="text" onChange={(e) => setName(e.target.value)} />
            <label className="label1">Email</label>
            <input className="input1" type="email" onChange={(e) => setEmail(e.target.value)} />
            <label className="label1">Mobile</label>
            <input className="input1" type="number" onChange={(e) => setMobile(e.target.value)} />
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

export default Register;
