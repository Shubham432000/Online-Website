import React, { useEffect, useState } from 'react';
import empty from '../image/undraw_empty_cart_co35.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const AddToCart = ({ cartItem, addToItem, removeToItem }) => {
  const [price, setPrice] = useState(0);
  let [price1, setPrice1] = useState(0);

  const total = () => {
    let price = 0;
    let price1=0;
    cartItem.map((item) => {
      price1 = price1 + item.price * item.qnty;
      // price = price + item.price * item.qnty - 5 + 2.25;
       price = price1 - 5 + 2.25;
    });
    setPrice(price);
    setPrice1(price1);
  };
  console.log('total', price);
  useEffect(() => {
    total();
  },[cartItem]);

  console.log(cartItem)
  return (
    <>
      {cartItem.length ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '85%'
          }}>
          <div>
            {cartItem.map((item,index) => {
              return (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    border: '1px solid black',
                    margin: '10px 0px 10px 0px'
                  }}>
                  <span style={{ margin: '50px 10px 0px 10px' }}>{item.name}</span>
                  <img src={item.imgdata} style={{ height: '200px', width: '200px' }} alt="" />
                  <span style={{ margin: '50px 10px 0px 10px' }}>
                    <FontAwesomeIcon icon={faStar} fade style={{ color: '#f9d801' }} />{' '}
                    <FontAwesomeIcon icon={faStar} fade style={{ color: '#f9d801' }} />{' '}
                    <FontAwesomeIcon icon={faStar} fade style={{ color: '#f9d801' }} />
                    {item.rating}
                  </span>
                  <span style={{ margin: '50px 10px 0px 10px' }}>{item.price}</span>
                  <span style={{ margin: '50px 10px 0px 10px' }}>{item.discount}</span>
                  <span style={{ margin: '50px 10px 0px 10px' }}>{item.oldprice}</span>
                  <span style={{ margin: '50px 10px 0px 10px' }}>{item.orderplaced}</span>
                  <span style={{ margin: '50px 10px 0px 10px' }}>
                    <button onClick={() => addToItem(item)}>+</button>
                  </span>

                  <span style={{ margin: '50px 10px 0px 10px' }}>{item.qnty}</span>
                  <span style={{ margin: '50px 10px 0px 10px' }}>
                    <button onClick={() => removeToItem(item)}>-</button>
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ width: '20%', border: '1px solid black', padding: '10px 10px 10px 10px' }}>
            <span>
              <p>Order Summary</p>
              <FontAwesomeIcon size={'2xl'} icon={faWallet} style={{ color: '#005cfa' }} />
            </span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '5px 0px 5px 0px'
              }}>
              <span>Subtotal</span>
              <span>
                <FontAwesomeIcon icon={faDollarSign} /> {price1}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '5px 0px 5px 0px'
              }}>
              <span>Discount</span>
              <span>
                - <FontAwesomeIcon icon={faDollarSign} style={{ color: '#f72c08' }} /> 5%
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '5px 0px 5px 0px'
              }}>
              <span>SalesTax</span>
              <span>$ 2.25</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '20px 0px 20px 0px'
              }}>
              <span>Total</span>
              <span>
                <FontAwesomeIcon icon={faDollarSign} style={{ color: '#0dbd0a' }} />
                {price}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                margin: '20px 0px 20px 0px'
              }}>
              <button style={{ padding: '10px 10px 10px 10px' }}>Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img src={empty} style={{ height: '700px', width: '800px' }} alt="" />
        </div>
      )}
    </>
  );
};

export default AddToCart;
