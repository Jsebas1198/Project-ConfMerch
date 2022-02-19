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
    clientId:'AYSnDb1grK3_xsqAATWfo0SPraczgJetl1zdadfLLIGGMcGOKiOBsErIPsYm_rDa6N9E8md2lr3FfwFA',
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
            buyer,
            products: cart,
            payment:data
        }

        addNewOrder(newOrder)
        navigate('/checkout/success')
    }
  }
  return (
    <div className="Payment">
      <div className="Payment-content">
          <h3>Resumen del pedido:</h3>
          {cart.map(()=>(
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
                  onPaymentSuccess={data => handlePaymentSuccess(data)}
                  onPaymentError={error => console.log(error)}
                  onPaymentCancel={data => console.log(data)}

                />
            </div>
        </div>
  </div>
  )
}

export default Payment