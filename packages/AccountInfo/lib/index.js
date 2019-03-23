import React from 'react';
import PropTypes from 'prop-types';
// import Web3 from 'web3';
import { Spin, Icon } from 'antd';
import 'antd/lib/spin/style/css';
import 'antd/lib/icon/style/css';

import Address from '@pbteja-dev/ui.kit.address';
import { StyledAccountInfo, Balance, BalanceHeader, BalanceInfo } from './styledComponents';

const antIcon = <Icon type="loading" spin />;
// const IS_DAPP_VERSION_ONE = true;

const AccountInfo = ({
  myBitBalance, ethBalance, userName
}) => (
  <StyledAccountInfo>
    <Balance>
      <BalanceHeader>Balance</BalanceHeader>
      {!ethBalance || !myBitBalance ? (
        <div style={{textAlign: 'center'}}><Spin indicator={antIcon} /></div>
        ) : (
          <BalanceInfo>
            <div>
              {Number(myBitBalance).toFixed(5)}{' '}
              <b>MYB</b>
            </div>
            <div> 
              {Number(ethBalance).toFixed(5)}{' '}
              <b>ETH</b>
            </div>
          </BalanceInfo>
        )}
    </Balance>
    <Address userName={userName} />
  </StyledAccountInfo>
);

AccountInfo.defaultProps = {
  myBitBalance: '0',
  ethBalance: '',
  userName: '',
};

AccountInfo.propTypes = {
  myBitBalance: PropTypes.string,
  ethBalance: PropTypes.string,
  userName: PropTypes.string,
};

export default AccountInfo;