import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponent = (props) => {
  const { navUpdate } = props;
  if (!navUpdate.navVal) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateComponent;
