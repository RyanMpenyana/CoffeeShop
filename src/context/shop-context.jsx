import React, { useState } from 'react'
import { createContext } from 'react'
import { CoffeeList } from '../MockData'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    //tracking items using the index
    let cart = {}
    for(let i = 1; i <= CoffeeList.length; i++ ){
            cart[i] = 0;
    }
    //this cart component will return an object {} with id as the key : and zero as the initial value 
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    //this add to cart function takes itemid as parameter and sets the cart
    const AddToCart = (itemId) => {
        setCartItems((prevCartItems) => ({ ...prevCartItems, [itemId]: prevCartItems[itemId] + 1}))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) => ({ ...prevCartItems, [itemId]: prevCartItems - 1}))
    }
     console.log(cartItems)
    const contextValue = {cartItems, AddToCart,removeFromCart}
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider
