import styled from "styled-components"
import { MagnifyingGlass , UserCheck, CraneTower, ShoppingBag, ShoppingCart} from "@phosphor-icons/react"
import { ShopContext } from "../context/shop-context"
import { useContext } from "react"

const NavContainer = styled.div`
    display : flex;
    width : 100%;
    padding: 1% 5%;
    justify-content : space-between;
    position :fixed;
    align-content : center;
    top : 0 ;
    `
    const SearchDiv = styled.div`
    display: flex;
    width : 80%;
    padding: 5px 10px;
    background : #eee;
    border-radius : 15px;
    align-content : center;
    `
    const Input = styled.input`
    width :100%;
    border : none;
    outline : none;     
    background : transparent;
    // padding : 10px;
    `
const QuantityDiv = styled.div`
    position : relative;
    left : 45px;
    color : white;
    bottom : 5px;
    height : 15px;
    width : 15px;
    background : red;
    border-radius : 50%;
    text-align : center;
    font-size : 12px;
    border : none;
    outline : none;
`
const Accessibility = styled.div`
    display : flex;
    gap : 10px;
    align-content :center;
`
const Nav = () => {
    const {handleCartOpen, amount} = useContext(ShopContext)
  return (
    <NavContainer>
        <div>
        <img  width={30} src="https://img.freepik.com/free-vector/3d-realistic-cup-coffee-beans_1441-2083.jpg?t=st=1718820891~exp=1718824491~hmac=33e9c729a998c3879f7e4e4633fe85d098bd3c359c1c856a5cfa4346ffceb9e3&w=826" alt="icon" />
        </div>
        <SearchDiv>
            <MagnifyingGlass/>
            <Input type="text" />
        </SearchDiv>
        <Accessibility>
            <div>
            <p>Coffee Gallery+</p>
            </div>
        <div><p>drop your image</p></div>
        <QuantityDiv>{amount}</QuantityDiv>
        <div><ShoppingCart onClick={() => handleCartOpen()} size={25}/></div>
        <div><UserCheck/></div>
        </Accessibility>
    </NavContainer>
  )
}

export default Nav