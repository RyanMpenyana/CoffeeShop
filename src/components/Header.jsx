import React from 'react'
import styled from 'styled-components'
import Icon from '../assets/wallpaperflare.com_wallpaper.jpg'

export const HeaderContainer = styled.div`
    

`
const Header = () => {
  return (
    <HeaderContainer>
    <img width={200} src={Icon} alt="" />
    </HeaderContainer>
  )
}

export default Header