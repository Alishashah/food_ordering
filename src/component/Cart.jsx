import React from 'react'
import Itemcategory from './Itemcategory'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../store/cartSlice'

const Cart = () => {
  const dispatch=useDispatch()
  const cartitems=useSelector((store)=>store.cart.items)
  const cleardata=()=>{
    dispatch(clearCart())
  }
  return (
    <div className='mx-auto w-6/12 text-center mt-4'>
      <div>
        <h1 className=' text-4xl font-bold  underline'>CART ITEM</h1>
      </div>
      { cartitems.length===0 ? <h1 className='mt-5'>cart is empty</h1> : <> <Itemcategory show={cartitems}/>
   <button className=' bg-slate-900 p-2 text-white mt-6 mb-4 ' onClick={cleardata}> Clear Cart</button>
   </>}
    </div>
  )
}

export default Cart