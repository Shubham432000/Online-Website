import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductData from "./ProductData";
import "../styles/ProductMoreInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProductMoreInfo = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);

  const compareId = () => {
    const filterData = ProductData.filter((value) => {
      return value.id == id;
    });
    setData(filterData);
    console.log("filterData", filterData);
  };
  console.log("filterData", data);

  useEffect(() => {
    compareId();
  }, [id]);

  return (
    <>
      {data.map((item) => {
        return (
          <div className="productA1">
            <div className="productA2">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={item.imgdata}
                  style={{ height: "400px", width: "400px" }}
                  alt=""
                />
              </div>
            </div>
            <div className="productA3">
              <span className="name1">{item.companyname}</span>
              <span className="name2">{item.name}</span>
              <span className="name2">${item.price}</span>
              <span className="name3">{item.discount} Off</span>
              <span className="name4" >
                $<del>{item.oldprice}</del>
              </span>
              <span className="name2">
                {/* <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span  className="fa fa-star checked"></span>  */}
               <FontAwesomeIcon icon="fa-solid fa-star" />
                {item.rating}
              </span>
              <span className="name2">{item.category}</span>
              <span className="name2">
                Orderd placed- <br />
                {item.orderplaced}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductMoreInfo;
