import React from 'react';
import PropTypes from 'prop-types';
// import Web3 from 'web3';
import { Spin, Icon } from 'antd';
import Address from '../Address';
import { StyledAccountInfo, Balance, BalanceHeader, BalanceInfo, BalanceMYB } from './styledComponents';

const antIcon = <Icon type="loading" spin />;
// const IS_DAPP_VERSION_ONE = true;

const AccountInfo = ({
  myBitBalance, ethBalance, userName, addressClassName,
}) => (
  <StyledAccountInfo>
    <Balance>
      <BalanceHeader>Balance</BalanceHeader>
      {!ethBalance || !myBitBalance ? (
        <Spin indicator={antIcon} />
        ) : (
          <BalanceInfo>
            {myBitBalance}{' '}
            <BalanceMYB>MYB</BalanceMYB>
            {Number(ethBalance).toFixed(4)}
            <b>ETH</b>
          </BalanceInfo>
        )}
    </Balance>
    <Address className={addressClassName} userName={userName} />
  </StyledAccountInfo>
);

AccountInfo.defaultProps = {
  myBitBalance: '0',
  ethBalance: '',
  userName: '',
  addressClassName: '',
};

AccountInfo.propTypes = {
  myBitBalance: PropTypes.string,
  ethBalance: PropTypes.string,
  userName: PropTypes.string,
  addressClassName: PropTypes.string,
};

export default AccountInfo;
