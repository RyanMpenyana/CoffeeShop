import styled from "styled-components";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const CartControls = styled.div`
    display: flex;
    justify-content : right
    
    `
const CartItemContainer = styled.div`
    box-shadow :2px 2px 2px 2px #ccc;
    margin : 10px;
    padding : 10px 30px;
    border : none;
    transition : 1s ease-in;

    &:hover{
        transition : scaleY(20px)
    }
    
`
const CartItem = ({item}) => {
    const {AddToCart,cartItems,removeFromCart} = useContext(ShopContext)
    return(<CartItemContainer key={item.key}>
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
    </CartItemContainer>)
}

export default CartItem;