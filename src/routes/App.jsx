import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import Home from '../containers/Home';
import Success from '../containers/Success ';
import Payment from '../containers/Payment';
import Information from '../containers/Information';
import Checkout from '../containers/Checkout';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';


const App = () => {
  const InitialState=useInitialState();
  return (
    <AppContext.Provider value={InitialState}> 
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/checkout/information" element={<Information />} />
              <Route exact path="/checkout/payment" element={<Payment />} />
              <Route exact path="/checkout/success" element={<Success />} />
              <Route element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
