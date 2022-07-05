import React from 'react'
import Navbar  from '../Navbar/Navbar'
import InfoProduct from '../Cart/InfoProduct'


const ShoppingCart = () => {
  return (
    <div>
        <Navbar/>
        <div className="shop-title">
          <h1>My cart</h1>
        </div>
        <div className="info-cart">
        <InfoProduct/>    
        </div>
    </div>
  )
}

export default ShoppingCart