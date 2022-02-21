import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        
      </div>
    </div>
  );
}

export default Success;