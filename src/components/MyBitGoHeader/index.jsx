import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../Logo/';
import ExchangeRate from '../ExchangeRate';
import AccountInfo from '../AccountInfo';

const HeaderWrapper = styled.div`
  height: 90px;
  background-image: linear-gradient(to right, #0b3f9c, #2e58db);
  margin: 0px 0px;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LogoColumn = styled.div`
  flex: 0 1 120px;
  padding: 0 12px 0px 24px;
`;
const ExchangeRateColumn = styled.div`
  flex: 1 150px;
  padding: 0 12px 0px 12px;
  min-width: 150px;
  @media (max-width: 600px) {
    display: none;
  }
`;
const AccountColumn = styled.div`
  margin-left: auto;
  margin-right: 10px;
  min-width: 300px;
`;

const MyBitGoHeader = ({ user, prices }) => (
  <HeaderWrapper className="grid">
    <LogoColumn>
      <Logo className="AppHeader__logo" />
    </LogoColumn>
    <ExchangeRateColumn>
      <ExchangeRate {...prices} />
    </ExchangeRateColumn>
    <AccountColumn>
      <AccountInfo {...user} />
    </AccountColumn>
  </HeaderWrapper>
);

export default MyBitGoHeader;

MyBitGoHeader.propTypes = {
  prices: PropTypes.shape({ params: PropTypes.object }).isRequired,
  user: PropTypes.shape({ params: PropTypes.object }).isRequired,
};
