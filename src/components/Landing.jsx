import LandingImg from '../assets/landing.png'
import styled from 'styled-components';
import { FlexDiv, Section } from './Containers';
import Cup from './../assets/espresso_2.png'
import FilteredCoffee from './../assets/filterkaffe_1.png'
import Croissants from './../assets/entkoffeiniert_2.png'
import Splash from '../assets/coffee-splash-with-coffee-beans-white-background.jpg'
import { useEffect, useState, useRef } from 'react';


export const BackgroundContainer = styled.div`
    background-image: url(${props => props.$background});
    background-size: cover;
    background-position: center;
    height : 40vh;
    margin-top : 60px;


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
const Circle = styled.div`
    position : fixed;
    width : 50px;
    height : 50px;
    border-radius : 50%;
    background : #f3f3f3;
    backdrop-filter: sepia(50%); 
    pointerEvents: 'none';
    border : none;
    outline : none;
    z-index : 1000;
    animation : 1s slidein ease-in-out infinite;

// @keyframes slidein {
//     from {
//     opacity : 1
//     }

//   to {
//     opacity : 0;
//     width : 60px;
//     height : 60px;
//   }

`
const Landing = () => {

const circleRef = useRef()

useEffect(() => {
    const handleMouseMove = (e) => {
      const circle = circleRef.current;
      if (!circle) return;

      const height = circle.offsetHeight;
      const width = circle.offsetWidth;

      setTimeout(() => {
        circle.style.left = `${e.clientX - width / 2}px`;
        circle.style.top = `${e.clientY - height / -50}px`;
      }, 20);
    };

    document.addEventListener( 'mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
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
            <Circle ref={circleRef}><h1></h1></Circle>
            <BackgroundContainer $background={Splash}>
               <AutoType id='demo'/>
               <h1 id='grab'></h1>
            </BackgroundContainer>
        </Section>

    )
}

export default Landing;