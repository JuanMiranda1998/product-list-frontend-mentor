import { useEffect, useState } from "react";
import { RemoveItemIcon } from "../utils/icons";

/* eslint-disable react/prop-types */
const Cart = ({ items, submitFunc, total }) => {
  const [totalCartItems, setTotalCartItems] = useState(null)
  
  useEffect(() => {
    let totalItems = 0;
    if (items.cartItems.length > 0) {
      items.cartItems.forEach(item => {
        totalItems += item.quantity;
      });
    } 
    setTotalCartItems(totalItems);
  }, [items])

  const {cartItems, setCartItems} = items;

  const removeItem = (e) => {
    const newCartArr = cartItems.filter((item) => item.id != e.target.id)
    setCartItems(newCartArr);
  }

  const submitOrder = () => {
    submitFunc(true)
  }

  return (
    <div className="xl:w-80 flex flex-col justify-center items-start p-6 rounded-md bg-[white]">
      <h2 className="mb-6 font-bold text-xl text-left text-red">Your Cart ({totalCartItems})</h2>
      {
        cartItems.length > 0 ? (<div className="flex flex-col w-full justify-center items-center">
          {cartItems.map((item, index) => 
        <div className="w-full" key={index}>
          <div className="flex flex-row w-full justify-between items-center" key={item.id}>
          <div className="w-full flex flex-col justify-center items-start my-2" >
            <p className="mb-2 text-rose-900 font-semibold">{item.name}</p>
            <div className="flex flex-row gap-4">
              <p className=" text-red font-semibold">x{item.quantity}</p>
              <p className=" text-rose-300">@ ${item.price.toFixed(2)}</p>
              <p className=" text-rose-400">${(item.price*item.quantity).toFixed(2)}</p>
            </div>
          </div>
          <button onClick={(e)=> removeItem(e)} className="removeButton flex justify-center items-center w-6 h-6 p-1 rounded-full border-2 border-solid border-rose-300 hover:border-rose-900" id={item.id}>
            <RemoveItemIcon />
          </button>
        </div>
        <div className="w-full h-[1px] rounded-full bg-rose-100 my-4" />
        </div>)}
        <div className="w-full flex flex-row justify-between items-center mb-10">
          <h2 className="text-rose-900">Order Total</h2>
          <p className="text-xl font-bold text-[black]">${total.toFixed(2)}</p>
        </div>
        <div className="w-72 flex flex-row justify-center items-center rounded-md mb-6 py-4 bg-rose-50">
          <img className="w-5 h-5 mr-2" src="/icon-carbon-neutral.svg" />
          <p className="text-sm">This is a <strong>carbon-neutral</strong> delivery</p>
        </div>
        <button onClick={() => submitOrder()} className="w-full max-w-[300px] rounded-full py-3 bg-red text-[white] hover:bg-[#952c0c] transition-colors ease-in duration-150">Confirm Order</button>
        </div>) 
        :
          (<div className="w-full my-4 flex flex-col items-center justify-center">
              <img className="mb-4" src="/illustration-empty-cart.svg" width={150} height={150} alt="" />
              <p className="text-rose-500 text-sm textce font-semibold">Your added items will appear here</p>
            </div>)
      }
    </div>
  )
}

export default Cart