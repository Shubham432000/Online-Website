import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "../styles/ProductMoreInfo.css";


const ProductMoreInfo = (props) => {
  const { productdata ,addToItem} = props;
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);

  const productFilter = () => {
    const filterData = productdata.filter((value) => {
      return value.id == id;
    });
    setData(filterData);
    console.log("filterData", filterData);
  };
  console.log("filterData", data);

  useEffect(() => {
    productFilter();
  }, [id]);

  return (
    <>
      {data.map((item) => {
        return (
          <div className="cartimg1" key={item.id}>
            <div className="cartimg2">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={item.imgdata}
                  style={{ height: "400px", width: "400px" }}
                  alt=""
                />
              </div>
            </div>
            <div className="cartinfo">
              <span className="companyname">{item.companyname}</span>
              <span className="name">{item.name}</span>
              <span className="name">${item.price}</span>
              <span className="discount">{item.discount} Off</span>
              <span className="oldprice">
                $<del>{item.oldprice}</del>
              </span>
              <span className="name">
              
                 <FontAwesomeIcon icon={faStar} fade style={{color: "#f9d801",}} />
                <FontAwesomeIcon icon={faStar} fade style={{color: "#f9d801",}} />
                <FontAwesomeIcon icon={faStar} fade style={{color: "#f9d801",}} />
                {item.rating}
              </span>
              <span className="name">{item.category}</span>
              <span className="name">
                Orderd placed- <br />
                {item.orderplaced}
              </span>
              <button onClick={()=>addToItem(item)}>Add To Cart</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductMoreInfo;
