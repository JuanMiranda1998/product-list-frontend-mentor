/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import AddIcon, { MinusIcon } from "../utils/icons";

const ProductCard = ({ productData, items }) => {
  const [isInCart, setIsInCart] = useState(false);
  const product = productData;
  const {cartItems, setCartItems} = items;


  useEffect(() => {
    setIsInCart(cartItems.some((item) => item.id === product.id))
  }, [cartItems, product.id])

  const addItem = () => {
    let newItem = {
      id: productData.id,
      name: productData.name, 
      price: productData.price,
      image: productData.image
    };
    if (cartItems.some((item) => item.id === product.id)){
      const quantity = cartItems.find((item) => item.id === product.id).quantity;
      const newArr = cartItems.filter((item) => item.id !== product.id);
      newItem = {...newItem, quantity: quantity + 1 };
      newArr.push(newItem);
      setCartItems(newArr);
    } else {
      newItem = {...newItem, quantity: 1}
      setCartItems([...cartItems, newItem])
    }
  }

  const decreaseItemQuantity = () => {
    if (cartItems.some((item) => item.id === product.id)) {
      const quantity = cartItems.find((item) => item.id === product.id).quantity;
      const newArr = cartItems.filter((item) => item.id !== product.id);
      if (quantity > 1) {
        let newItem = {
          id: productData.id,
          name: productData.name, 
          price: productData.price,
          quantity: quantity - 1,
          image: productData.image
        };
        newArr.push(newItem);
        setCartItems(newArr);
        return;
      }
      setCartItems(newArr);
    }
  }

  return (
    <div className="max-w-[350px] lg:max-w-52">
      <div className="flex flex-col justify-center items-center">
        <div className={`w-full rounded-md overflow-hidden ${isInCart ? 'border-2 border-solid border-red' : 'border-2 border-solid border-[transparent]'}`}>
          <picture>
            <source media="(min-width: 1200px)" srcSet={product.image.desktop} alt={`${product.name} image`} />
            <source media="(min-width: 900px)" srcSet={product.image.tablet} alt={`${product.name} image`} />
            <source media="(min-width: 320px)" srcSet={product.image.mobile} alt={`${product.name} image`} />
            <img src={product.image.thumbnail} alt={`${product.name} image`} />
          </picture>
        </div>
        {
          isInCart ?
          <div className="w-56 lg:w-44 flex flex-row justify-between items-center text-[0.975rem] font-semibold text-[white] px-4 py-3 lg:px-3 rounded-full -translate-y-5 bg-red" id={product.name}>
              <button onClick={() => decreaseItemQuantity()} className="cardButton w-6 h-6 flex justify-center items-center rounded-full object-contain border-2 border-solid border-[white] hover:bg-[white]">
                <MinusIcon />
              </button>
              {cartItems.find(item => item.id === product.id)?.quantity}
              <button onClick={() => addItem()} className="cardButton w-6 h-6 flex justify-center items-center rounded-full border-2 border-solid border-[white] hover:bg-[white]">
                <AddIcon />
              </button>
            </div> : (
            <button onClick={() => addItem()} className="text-[0.975rem] font-semibold text-rose-900 px-7 py-3 border-solid border border-rose-500 rounded-full -translate-y-5 bg-[white] hover:border-red hover:text-red transition-colors ease-in duration-100" id={product.name}>
              <img className="inline mr-2 pointer-events-none" src="/icon-add-to-cart.svg" />
              Add to cart
            </button>
          )
        }
      </div>
      <div className="flex flex-col gap-1 text-left">
        <p className=" text-rose-400">{product.category}</p>
        <h2 className=" text-rose-900 font-semibold">{product.name}</h2>
        <p className="text-lg text-red font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCard