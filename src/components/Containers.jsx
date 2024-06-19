import styled from "styled-components";

export const Center = styled.div`
    max-width : 1400px;
    margin : 0 15%;
    height : 100%;
    color:#522C06;
    `
    export const FlexDiv = styled.div`
    display : flex;
    gap : ${props => props.$gap};
    margin-top : 10px 
    `
    export const Button = styled.button`
    text-align : center;
    display : flex;
    justify-content : center;
    align-content : center;
    width : 100%;
    padding : 15px 20px;
    border : none;
    font-size : 1.5rem;
    font-weight : 600;    
    background-color : #F5F3F2;
    gap : 10px;
    transition : 1s ease ;

    &:hover{
    background-color : #745039e5;
    color: white;
    cursor : pointer;
    }
    `
    export const Card = styled.div`
    width : 415px;
    // height : 400px;
    display : flex;
    flex-direction : column;
    justify-content: start;
    margin-right : 25px
    `
    export const Section = styled.section`
    
    
    `
    
