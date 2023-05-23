import "./App.css";
import Register from "./account/Register";
import Login from "./account/Login";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import ProductDetails from "./component/ProductDetails";
import ProductMoreInfo from "./component/ProductMoreInfo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/productmoreinfo/:id" element={<ProductMoreInfo />} />
      </Routes>
    </div>
  );
}

export default App;
