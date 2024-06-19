import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { Section, FlexDiv } from './Containers';
import { CoffeeCards } from './Landing';
import Organics from './../assets/bio_1.png';
import FairTrade from './../assets/fairtrade_2.jpg';
import Coffee from './../assets/teaser2-kaffeepods-bw.jpg';
import Cart from './Cart';
import { CoffeeList, CoffeeWorld } from '../MockData';
import bg from '../assets/mockup.jpg'
import ground from '../assets/ground.jpg'
import esPacino from '../assets/espCup.jpg'
import Beans from '../assets/beans.jpg';


export const ProductsContainer = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    margin-bottom : 80px;
`;

export const H1 = styled.h1`
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
`;

const ProductsPage = () => {
    const [cart] = useState([])
    return (
        <Section>
            <BackgroundDiv/>
            <H1>High Quality Coffee</H1>
            <ProductsContainer>
                {CoffeeList.map((item) => (
                    <Product
                        key={item.id}
                        item={item}
                    />
                ))}
            </ProductsContainer>
            <FlexDiv $gap={"20px"}>
                
            </FlexDiv>
            <H1>Around The Coffee World</H1>
            <Cart items={cart} />
        </Section>
    );
};

export default ProductsPage;

const First = styled.div`   
    background-image : url(${props => props.$image});
    background-position :center;
    background-size: contain;
    background-repeat : no-repeat;
    width : 100%;
    height : 100%;
    border-radius : 10px;

    h1{
    text-align : center;
    align-content :center;
        border-radius : 5px;
          font-size : 2rem;
          height : 100%;
          width : 100%;
          transition : 1s ease-in-out ;
    }
          h1:hover{
          color : white;
          background-color : rgba(0 , 0 , 0, 0.2);
`
const BG = styled.div`
margin-top : 40px;
    display : flex;
    height : 40vh;
`
const BackgroundDiv = () => {
  
    return (
        <BG>
            <First $image={bg}>
                <h1>Mokka</h1>
            </First>
            <First $image={ground}>
                <h1>Ground Coffee</h1>
            </First>    
            <First $image={esPacino}>
               <h1>Espresso</h1>
            </First>
            <First $image={Beans}>
                <h1>Beans</h1>
            </First>
        </BG>
    )
}