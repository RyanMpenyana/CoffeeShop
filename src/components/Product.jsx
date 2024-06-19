import { Button, Card } from "./Containers";
import styled from 'styled-components';
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";
import CART from '../assets/card-icon.svg'

export const Prices = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
`;

const Product = ({item}) => {
    
    const {AddToCart, cartItems} = useContext(ShopContext)

    const Quantity = cartItems[item.id] 

    // const handleAddToCart = (e) => {
    //     e.preventDefault()
    //     onClick(item);
    // }
    // console.log(item.id)

    return (
        <Card >
                <div>
                    <img src={item.image} alt="img" width={"100%"} />
                    <p>{item.name}</p>
                </div>
                <Prices>
                    <p>${item.pricePerkg}</p>
                    <p>${item.price}</p>
                </Prices>
                <div>
                    <Button onClick={() => AddToCart(item.id)} type="submit">
                       <span><img src={CART} width={30} alt="" /></span> Add to Cart {Quantity > 0 && <>({ Quantity})</>}
                    </Button>
                </div>
        </Card>
    );
};

export default Product;
