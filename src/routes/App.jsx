import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import Home from '../containers/Home';
import Success from '../containers/Success ';
import Payment from '../containers/Payment';
import Information from '../containers/Information';
import Checkout from '../containers/Checkout';
import NotFound from '../containers/NotFound';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/checkout/information" element={<Information />} />
        <Route exact path="/checkout/payment" element={<Payment />} />
        <Route exact path="/checkout/success" element={<Success />} />
        <Route element={<NotFound />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
