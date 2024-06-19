import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import ProductImage from './../assets/alps_coffee_produkte_bio_organico.jpg';
import { Section, FlexDiv } from './Containers';
import { CoffeeCards } from './Landing';
import Organics from './../assets/bio_1.png';
import FairTrade from './../assets/fairtrade_2.jpg';
import Coffee from './../assets/teaser2-kaffeepods-bw.jpg';
import Cart from './Cart';
import { CoffeeList } from '../MockData';

export const ProductsContainer = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    height: auto;
`;

export const H1 = styled.h1`
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
`;

const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const [amount] = useState(0)

    // const handleAddToCart = (e) => {
    //     setCart()
    // }

    return (
        <Section>
            <H1>High Quality Coffee</H1>
            <ProductsContainer>
                {CoffeeList.map((item) => (
                    <Product
                        key={item.id}
                        item={item}
                    />
                ))}
            </ProductsContainer>
            {/* <FlexDiv $gap={"20px"}>
                <CoffeeCards>
                    <img src={Organics} width={"100%"} height={"100%"} alt="" />
                </CoffeeCards>
                <CoffeeCards>
                    <img src={FairTrade} width={"100%"} height={"100%"} alt="" />
                </CoffeeCards>
                <CoffeeCards>
                    <img src={Coffee} width={"100%"} height={"100%"} alt="" />
                </CoffeeCards>
            </FlexDiv> */}
            <H1>Around The Coffee World</H1>
            <ProductsContainer>
                {/* <Product
                    image={ProductImage}
                    productName={'caffe espresso bio organico 1000g'}
                    pricePerkg={'34.40/kg'}
                    price={'34.40'}
                    onAdd={handleAddToCart}
                />
                <Product
                    image={ProductImage}
                    productName={'caffe espresso bio organico 1000g'}
                    pricePerkg={'34.40/kg'}
                    price={'34.40'}
                    onAdd={handleAddToCart}
                />
                <Product
                    image={ProductImage}
                    productName={'caffe espresso bio organico 1000g'}
                    pricePerkg={'34.40/kg'}
                    price={'34.40'}
                    onAdd={handleAddToCart}
                /> */}
            </ProductsContainer>
            <Cart items={cart} />
        </Section>
    );
};

export default ProductsPage;
