import React from 'react';
import PropTypes from 'prop-types';
import Logo from '@mybit/ui.logo';
import ExchangeRate from '@mybit/ui.exchange-rate';
import AccountInfo from '@mybit/ui.account-info';
import { HeaderWrapper, LogoColumn, ExchangeRateColumn, AccountColumn } from './styledComponents';

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
