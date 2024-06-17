import { Button, Card } from "./Containers";
import styled from 'styled-components';

export const Prices = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
`;

const Product = ({ image, productName, pricePerkg, price, onAdd }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(image, productName, pricePerkg, price);
    };

    return (
        <Card>
            <form onSubmit={onSubmit}>
                <div>
                    <img src={image} alt="img" width={"100%"} />
                    <p>{productName}</p>
                </div>
                <Prices>
                    <p>${pricePerkg}</p>
                    <p>${price}</p>
                </Prices>
                <div>
                    <Button type="submit">
                        Add to Cart
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Product;
