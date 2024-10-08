import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../Context/StoreContext'
import {useNavigate} from 'react-router-dom'

function Cart() {

const {cartItem,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext)
const navigate = useNavigate()

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
           <p>Items</p>
           <p>Title</p>
           <p>Price</p>
           <p>Quantity</p>
           <p>Total</p>
           <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if(cartItem[item._id]>0){
            return(
              <div> 
              <div className="cart-items-title cart-items-item">
               <img src={item.image} alt="" />
               <p>{item.name}</p>
               <p>${item.price}</p>
               <p>{cartItem[item._id]}</p>
               <p>${item.price*cartItem[item._id]}</p>
               <p className='cross' onClick={()=>removeFromCart(item._id)}>X</p>
              </div>
              <hr/>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
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
    </div>
  )
}

export default Cart