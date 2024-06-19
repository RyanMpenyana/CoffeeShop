import { createPortal } from 'react-dom';
import styled from 'styled-components';
import CartItem from '../components/CartItem'
import { CoffeeList } from '../MockData';
import { ShopContext } from '../context/shop-context';
import { useContext } from 'react';
import CART from '../assets/card-icon.svg'

export const CartContainer = styled.div`
    position: fixed;
    top: 60px;
    right:50px;
    width : 500px;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    
`;

const Cart = (item) => {    
    const {isOpen,cartItems}  = useContext(ShopContext)


    return (
        <>
       {isOpen && <CartContainer>
        {
          (  CoffeeList.map((item) => {
                return (
                    cartItems[item.id] !== 0 && <CartItem key={item.id} item={item}/>
                );
            }) )
        }
    </CartContainer>}
    </>
    );
};

export default Cart;

export const CartOverlay = () => {
    createPortal(<Cart />, document.getElementById('Cart'));
};


