'use client'
import './App.css'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import products from './data.json'
import { useEffect, useState } from 'react'
import OrderConfirmation from './components/OrderConfirmation'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartSubmitted, setCartSubmitted] = useState(false)
  const [totalCartPrice, setTotalCartPrice] = useState(0)

  useEffect(() => {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.forEach(item => {
        totalPrice += item.price * item.quantity; 
      });
    } 
    setTotalCartPrice(totalPrice);
    if (cartSubmitted) {
      const confirmationCard = document.getElementById('confirmationElement')
      confirmationCard.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }, [cartItems,cartSubmitted])

  const itemsSelected = {cartItems, setCartItems};

  const resetCart = () => {
    setCartItems([])
    setCartSubmitted(false)
    setTotalCartPrice(0)
  }


  return (
    <div className='w-full max-w-[100vw] relative'>
      {cartSubmitted&&<div className='absolute z-10 top-0 bottom-0 left-0 right-0 bg-[#00000050]'></div> }
      <div className='w-full flex flex-col justify-center items-center xl:flex-row xl:items-start xl:gap-10 px-8 pt-8'>
        <div>
        <h1 className='font-bold text-left text-rose-900 text-4xl mb-6'>Desserts</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {products.map((product, index) => (
            <ProductCard productData={product} items={itemsSelected} key={index} />
          ))}
        </div>
        </div>
        <Cart items={itemsSelected} submitFunc={setCartSubmitted} total={totalCartPrice} />
      </div>
      {cartSubmitted&&<OrderConfirmation resetFunc={resetCart} order={cartItems} total={totalCartPrice} />}
      <div className="attribution mt-10">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="#">Juan Miranda</a>.
      </div>
    </div>
  )
}

export default App
