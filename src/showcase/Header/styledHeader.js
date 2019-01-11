import React from 'react';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 80px;
  background-image: linear-gradient(to right, #0b3f9c, #2e58db);
  margin: 0px 0px;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoWrapper = styled.div`
    display: block;
    width: 80px;
`

export const HeaderLogo = ({ src }) => (
    <LogoWrapper>
        <img src={src} />
    </LogoWrapper>
)