import React from 'react'

const handleSum = (cart) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
  return (
         sum
  )
}

export default handleSum