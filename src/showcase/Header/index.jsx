import React from 'react';
import { HeaderWrapper, HeaderLogo } from './styledHeader';

const Header = ({ user, prices }) => (
  <HeaderWrapper className="grid">
    <HeaderLogo src="https://files.mybit.io/svgs/icons/mybit-full-white.svg" />
  </HeaderWrapper>
);

export default Header;