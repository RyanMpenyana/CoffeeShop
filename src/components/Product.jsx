import { Button, Card } from "./Containers";
import styled from 'styled-components';
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";
import CART from '../assets/card-icon.svg'
import { ShoppingCartSimple } from "@phosphor-icons/react";

export const Prices = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
`;
export const ProductName = styled.div`
    font-weight : 600;
`
const Product = ({item}) => {
    
    const {AddToCart, cartItems} = useContext(ShopContext)

    const Quantity = cartItems[item.id] 
    return (
        <Card >
                    <img src={item.image} alt="img" width={"100%"} />
                <ProductName style={{textAlign : 'left'}}>
                    {item.name}
                </ProductName>
                <Prices>
                    <p>${item.pricePerkg}</p>
                    <p>${item.price}</p>
                </Prices>
                <div>
                    <Button onClick={() => AddToCart(item.id)} type="submit">
                       <span><ShoppingCartSimple style={{fontSize : '25px'}}/></span> Add to Cart {Quantity > 0 && <>({ Quantity})</>}
                    </Button>
                </div>
        </Card>
    );
};

export default Product;
