import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';
const Navbar = (props) => {
  const { cartItem, navUpdate, authLogin } = props;

  console.log('navUpdate.navVal', navUpdate.navVal);
  return (
    <>
      {navUpdate.navVal ? (
        <div className="navbar1">
          <div className="navbar2">
            <Link to="/productdetails" className="navbar3">
              Product
            </Link>
            <Link to="/addtocart" className="navbar3">
              <div style={{ backgroundColor: 'blue', padding: '8px 20px 8px 20px' }}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  beat
                  style={{ color: '#ffffff', fontSize: '25px' }}
                />{' '}
                <span
                  style={{
                    fontSize: '17px',
                    padding: '0px 5px 0px 5px',
                    backgroundColor: 'red',
                    color: 'white',
                    marginLeft:"5px"
                  }}>
                  {cartItem.length}
                </span>
              </div>
            </Link>
            <Link to="/login" onClick={() => authLogin({ navVal: false })} className="navbar3">
              Logout
            </Link>
          </div>
        </div>
      ) : (
        <div className="navbar1">
          <div className="navbar2">
            <Link to="/" className="navbar3">
              Register
            </Link>
            <Link to="/login" className="navbar3">
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
