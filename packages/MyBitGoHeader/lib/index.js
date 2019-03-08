import React from 'react';
import PropTypes from 'prop-types';
import Logo from '@pbteja-dev/ui.kit.logo';
import ExchangeRate from '@pbteja-dev/ui.kit.exchange-rate';
import AccountInfo from '@pbteja-dev/ui.kit.account-info';
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
