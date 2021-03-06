import React,{useContext} from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import {useNavigate } from "react-router-dom";
import AppContext from '../context/AppContext';
import handleSum from '../utils/handleSum';
import "../styles/components/Payment.css"

const Payment = () => {
  const {state,addNewOrder}=useContext(AppContext);
  const {cart,buyer}=state;
  const paypalOptions={
    clientId:process.env.CLIENT_ID,
    intent:'capture',
    currency:'USD'
  }

  const navigate = useNavigate();

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handlePaymentSuccess = (data)=>{
    console.log(data);
    if(data.status === 'COMPLETED'){
        const newOrder ={
            buyer: buyer,
            product: cart,
            payment:data
        }

        addNewOrder(newOrder);
        navigate('/checkout/success')
    }
  }
  return (
    <div className="Payment">
      <div className="Payment-content">
          <h3>Resumen del pedido:</h3>
          {cart.map((item)=>(
              <div className="Payment-item" key={item.title}>
                  <div className="Payment-element">
                    <h4>{item.title}</h4>
                    <span>${item.price}</span>
                  </div>
              </div>
          ))}
          <div className="Payment-button">
                <PayPalButton 
                  paypalOptions={paypalOptions}
                  buttonStyles={buttonStyles}
                   amount={handleSum(cart)}
                  onPaymentStart={() =>console.log("Start payment")}
                  onSuccess={data => handlePaymentSuccess(data)}
                  onError={error => console.log(error)}
                  onCancel={data => console.log(data)}

                />
            </div>
        </div>
  </div>
  )
}

export default Payment