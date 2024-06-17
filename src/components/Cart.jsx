import { createPortal } from 'react-dom';
import styled from 'styled-components';

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
`;

const Cart = (props) => {
    return (
        <CartContainer>
            {props.items.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item.image} alt="productImage" width={50} />
                        <div>
                            <h4>{item.productName}</h4>
                        </div>
                        <div>
                            <p>x{item.amount}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>
                );
            })}
        </CartContainer>
    );
};

export default Cart;

export const CartOverlay = () => {
    createPortal(<Cart />, document.getElementById('Cart'));
};
