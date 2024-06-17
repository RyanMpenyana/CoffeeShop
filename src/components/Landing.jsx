import LandingImg from '../assets/landing.png'
import styled from 'styled-components';
import { FlexDiv, Section } from './Containers';
import Cup from './../assets/espresso_2.png'
import FilteredCoffee from './../assets/filterkaffe_1.png'
import Croissants from './../assets/entkoffeiniert_2.png'


export const BackgroundContainer = styled.div`
    background-image: url(${props => props.$background});
    background-size: cover;
    background-position: center;
    height : 45vh;
`
export const CoffeeCards = styled.div`
    height : 350px;
    width : 100%;
`
const Landing = () => {
    return (
        <Section>
            <BackgroundContainer $background={LandingImg}>
            </BackgroundContainer>
           <FlexDiv $gap={"20px"}>
           <CoffeeCards>
                <img src={Cup} width={"100%"} height={"100%"} alt="" />
            </CoffeeCards>
            <CoffeeCards>
                <img src={FilteredCoffee} width={"100%"} height={"100%"} alt="" />
            </CoffeeCards>
            <CoffeeCards>
                <img src={Croissants} width={"100%"} height={"100%"} alt="" />
            </CoffeeCards>
           </FlexDiv>
        </Section>

    )
}

export default Landing;