import styled from 'styled-components'
import Nav from './Nav'

export const HeaderContainer = styled.div`
    width : 100%;
    display : flex;
    height : 100px;
    align-content : center;
    // background-color : red
    position : fixed;
    top : 0;
`
const Header = () => {
  return (
    <HeaderContainer>
        <Nav/>
    </HeaderContainer>
  )
}

export default Header