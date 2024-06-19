import styled from 'styled-components'
import Nav from './Nav'

export const HeaderContainer = styled.div`
    width : 100%;
    display : flex;
    height : 20px;
    align-content : center
`
const Header = () => {
  return (
    <HeaderContainer>
        <Nav/>
    </HeaderContainer>
  )
}

export default Header