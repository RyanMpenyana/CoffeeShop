import LandingImg from '../assets/landing.png'
import styled from 'styled-components';
import { FlexDiv, Section } from './Containers';
import Cup from './../assets/espresso_2.png'
import FilteredCoffee from './../assets/filterkaffe_1.png'
import Croissants from './../assets/entkoffeiniert_2.png'
import Splash from '../assets/coffee-splash-with-coffee-beans-white-background.jpg'
import { useEffect, useState } from 'react';


export const BackgroundContainer = styled.div`
    background-image: url(${props => props.$background});
    background-size: cover;
    background-position: center;
    height : 50vh;
    margin-top : 45px;


    @keyframes
`
export const CoffeeCards = styled.div`
    height : 350px;
    width : 100%;
`
const AutoType = styled.h1`
    font-size : 4rem;
    font-weight : bold;
    position : absolute;
    top : 30%;
    left : 35%;
    color : white;
    background : transparent
`
const Landing = () => {
  
    let i = 0;
   useEffect(() => {
     let slogan = "Grab A Hot Cup of Happiness!"
     
    let speed = 150;
    function typeWriter() {
        if (i < slogan.length) {
          document.getElementById("demo").innerHTML += slogan.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
          }
      }
      typeWriter()
   },[])
      
    return (
        <Section>
            <BackgroundContainer $background={Splash}>
               <AutoType id='demo'/>
               <h1 id='grab'></h1>
            </BackgroundContainer>
        </Section>

    )
}

export default Landing;