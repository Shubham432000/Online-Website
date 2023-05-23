import React, { useEffect, useState } from "react";
import ProductData from "./ProductData";
import "../styles/ProductDetails.css";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [data, setData] = useState(ProductData);

  const [showPerPage, setShowPerPage] = useState(5);
  const [counter, setCounter] = useState(1);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const [numberOfButton, setNumberOfButton] = useState(
    Math.ceil(data.length / showPerPage)
  );

  console.log(numberOfButton)

  const navigate = useNavigate();
  const readMore = (id) => {
    navigate(`/productmoreinfo/${id}`);
  };


  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButton === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <>
      {data.length ? (
        data.slice(pagination.start, pagination.end).map((item) => {
          return (
            <div
              className="product1"
              key={item.id}
              onClick={() => readMore(item.id)}
            >
              <div className="product2" key={item.id}>
                <span>{item.companyname}</span>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={item.imgdata}
                    alt=""
                    style={{
                      height: "200px",
                      width: "200px",
                      marginTop: "12px",
                      marginBottom: "10px",
                    }}
                    className="zoomimg"
                  />
                </div>

                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading....</div>
      )}
      <div className="pagination">
        <button className="button1"  onClick={() => onButtonClick("prev")}>Previous</button>
        {new Array(numberOfButton).fill("").map((item, index) => {
          console.log(item)
          return (
            <>
            <button className="button2" onClick={() => setCounter(index + 1)}>
              {index + 1}
            </button>
            
            </>
          );
        })}
        <button className="button1"  onClick={() => onButtonClick("next")}>Next</button>
      </div>
    </>
  );
};

export default ProductDetails;
