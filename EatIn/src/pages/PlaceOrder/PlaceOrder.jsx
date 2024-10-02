import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../Context/StoreContext'

function PlaceOrder() {

  const {getTotalCartAmount}=useContext(StoreContext)

  return (
   <form action="" className='place-order'>
    <div className="place-order-left">
      <p className="title"> Delivery Information  </p>
      <div className="multifields">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name'/>
      </div>
      <input type="text"placeholder='Address' />
      <input type="text" placeholder='Email'/>
    <div className="multifields">
        <input type="text" placeholder='City' />
        <input type="text" placeholder='State'/>
      </div>
      <div className="multifields">
        <input type="text" placeholder='Country' />
        <input type="text" placeholder='Pin Code'/>
      </div>
      <input type="text" placeholder='Phone'/>
      </div>
    <div className="place-order-right">
    <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()==0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-detail">
              <b>Total</b>
              <b>${getTotalCartAmount()==0?0:getTotalCartAmount+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Apply promocode</p>
          </div>
          <div className="cart-promocode-input">
            <input type="text" placeholder='Enter promocode' />
            <button>Submit</button>
          </div>
        </div>
    </div>
   </form>
  )
}

export default PlaceOrder