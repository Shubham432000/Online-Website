import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProductDetails.css';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ productdata, addToItem }) => {
  const [data, setData] = useState(productdata);

  const [showPerPage, setShowPerPage] = useState(5);
  const [counter, setCounter] = useState(1);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage
  });

  const [numberOfButton, setNumberOfButton] = useState(Math.ceil(data.length / showPerPage));

  console.log(numberOfButton);

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
    if (type === 'prev') {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === 'next') {
      if (numberOfButton === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  // search functionality

  const [copydata, setcopyData] = useState([]);


  const changeData = (searchData) => {
    let getChangedata = searchData.toLowerCase();

    if (getChangedata === '') {
      setcopyData(data);
    } else {
      let storData = data.filter((ele) => {
        return ele.category.toLowerCase().match(searchData);
      });
      setcopyData(storData);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setcopyData(data);
    }, 2000);
    
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} flip />
          <input
            type="text"
            placeholder="search......"
            onChange={(e) => changeData(e.target.value)}
            style={{width:"300px",height:"25px"}}
            
          />
         
        </div>
        <div className='product1' >
          {copydata.length ? (
            copydata.slice(pagination.start, pagination.end).map((item) => {
              return (
                <>
                  <div className="product1" key={item.id}>
                    <div className="product2" key={item.id}>
                      <span>{item.companyname}</span>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                          onClick={() => readMore(item.id)}
                          src={item.imgdata}
                          alt=""
                          style={{
                            height: '200px',
                            width: '200px',
                            marginTop: '12px',
                            marginBottom: '10px'
                          }}
                          className="zoomimg"
                        />
                      </div>

                      <span>{item.name}</span>
                      <span>${item.price}</span>
                      <button style={{height:"25px",width:"100px",marginTop:"20px"}} onClick={() => addToItem(item)}>Add To Cart</button>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            
            <FontAwesomeIcon icon={faSpinner} spin  size='2xl'/>
          )}
        </div>
        <div className="pagination">
          <button
            className="paginationbutton1"
            disabled={counter === 1}
            onClick={() => onButtonClick('prev')}>
            Previous
          </button>
          {new Array(numberOfButton).fill('').map((item, index) => {
            return (
              <>
                <button className="paginationbutton2" onClick={() => setCounter(index + 1)}>
                  {index + 1}
                </button>
              </>
            );
          })}
          <button
            className="paginationbutton1"
            disabled={numberOfButton === counter}
            onClick={() => onButtonClick('next')}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
