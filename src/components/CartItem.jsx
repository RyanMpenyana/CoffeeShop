import styled from "styled-components";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const CartControls = styled.div`
    display: flex;
    justify-content : right
    
`
const CartItem = ({item}) => {
    const {AddToCart,cartItems,removeFromCart} = useContext(ShopContext)
    return(<div key={item.key}>
        <img src={item.image} alt="productImage" width={50} />
                        <div>
                            <h4>{item.name}</h4>
                        </div>
                        <CartControls>
                            <button onClick={() => AddToCart(item.id)}>+</button>
                                < input value={cartItems[item.id]}/>
                            <button onClick={() =>  removeFromCart(item.id)}>-</button>
                        </CartControls>
                        <div>
                        <p>{item.price}</p>
                        </div>
    </div>)
}

export default CartItem;