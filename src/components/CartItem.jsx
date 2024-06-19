import styled from "styled-components";

const CartControls = styled.div`
    display: flex;
    justify-content : right
    
`
const CartItem = ({item}) => {
    return(<div key={item.key}>
        <img src={item.image} alt="productImage" width={50} />
                        <div>
                            <h4>{item.name}</h4>
                        </div>
                        <CartControls>
                            <button>+</button>
                            <p>x{item.amount}</p>
                            <button>-</button>
                        </CartControls>
                        <div>
                        <p>{item.price}</p>
                        </div>
    </div>)
}

export default CartItem;