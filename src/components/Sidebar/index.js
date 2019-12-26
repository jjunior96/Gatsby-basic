import React from 'react'
import Profile from '../Profile'

import SocialLinks from '../SocialLinks'
// import MenuLinks from '../MenuLinks'

import * as S from './styled'

const Siderbar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    {/* <MenuLinks /> */}
  </S.SidebarWrapper>
)

export default Siderbar