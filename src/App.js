import './styles/App.css';
import Register from './account/Register';
import Login from './account/Login';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import ProductDetails from './pages/ProductDetails';
import ProductMoreInfo from './pages/ProductMoreInfo';
import AddToCart from './component/AddToCart';
import ProductData from './component/ProductData';
import { useState } from 'react';
import PrivateComponent from './component/PrivateComponent';

function App() {

  
  // ADD TO CART PRODUCT
  const [cartItem, setCartItem] = useState([]);

  // const addToItem = (product) => {
  //   const ProductExit = cartItem.find((data) => data.id === product.id);
  //   console.log(ProductExit);
  //   if (ProductExit) {
  //     setCartItem(
  //       cartItem.map((item) =>
  //         item.id === product.id ? { ...ProductExit, qnty: ProductExit.qnty + 1 } : item
  //       )
  //     );
  //   } else {
  //     const temp = { ...product, qnty: 1 };
  //     setCartItem([...cartItem, temp]);
  //   }
  // };

  const addToItem = (product) => {
    const ind = cartItem.findIndex((data) => data.id === product.id);
    console.log(ind);
    if (ind >= 0) {
      // setCartItem(
      //   cartItem.map((item) =>
      //     item.id === product.id ? { ...cartItem[ind], qnty: cartItem[ind].qnty + 1 } : item
      //   )
      // );
      let cardData = cartItem.map((item) => {
        if (item.id === product.id) {
          return { ...cartItem[ind], qnty: cartItem[ind].qnty + 1 };
        } else {
          return item;
        }
      });
      setCartItem(cardData);
    } else {
      const temp = { ...product, qnty: 1 };
      setCartItem([...cartItem, temp]);
    }
  };

  // REMOVE CART
  const removeToItem = (product) => {
    const ProductExit = cartItem.find((data) => data.id === product.id);

    if (ProductExit.qnty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id ? { ...ProductExit, qnty: ProductExit.qnty - 1 } : item
        )
      );
    }
  };

  // AUTHENTICATION

  const [authRegisterValid, setAuthRegisterValid] = useState();
  const [navUpdate, setNavUpdate] = useState(false);

  const authRegister = (validation) => {
    console.log(validation.name);
    setAuthRegisterValid(validation);
  };

  const authLogin = (authData) => {
    console.log(authData.navVal);
    setNavUpdate(authData);
  };

  // search

  return (
    <div className="App">
      <Navbar cartItem={cartItem} navUpdate={navUpdate} authLogin={authLogin} />
      <Routes>
        <Route element={<PrivateComponent navUpdate={navUpdate} />}>
          <Route
            path="/productdetails"
            element={<ProductDetails productdata={ProductData} addToItem={addToItem} />}
          />
          <Route
            path="/productmoreinfo/:id"
            element={<ProductMoreInfo productdata={ProductData} addToItem={addToItem} />}
          />
          <Route
            path="/addtocart"
            element={
              <AddToCart cartItem={cartItem} addToItem={addToItem} removeToItem={removeToItem} />
            }
          />
        </Route>
        <Route path="/" element={<Register authRegister={authRegister} />} />
        <Route
          path="/login"
          element={<Login authRegisterValid={authRegisterValid} authLogin={authLogin} />}
        />
      </Routes>
    </div>
  );
}

export default App;
