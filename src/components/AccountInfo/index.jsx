import React from 'react';
import PropTypes from 'prop-types';
// import Web3 from 'web3';
import { Spin, Icon } from 'antd';
import styled from 'styled-components';
import Address from '../Address';

const antIcon = <Icon type="loading" spin />;
const IS_DAPP_VERSION_ONE = true;

const StyledAccountInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 90px;
`;
const Balance = styled.div`
    font-size: 18px;
    text-align: right;
    margin-right: 15px;
`;
const BalanceHeader = styled.div`
    font-weight: bold;
`;
const BalanceInfo = styled.div`
font-size: 14px;
`;
const BalanceMYB = styled.b`
padding-right: 10px;
`;

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
