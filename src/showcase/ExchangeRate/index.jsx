import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spin, Icon } from 'antd';
import 'antd/lib/style/css';

const antIcon = <Icon type="loading" spin />;

const ExchangeRateSpan = styled.span`
    line-height: 90px;
    font-size: 14px;
`;

const StyledLoader = styled(Spin)`
    &&& {
        float: left;
        top: 27px;
        position: relative;
        font-size: 24px;
    }
`;

const ExchangeRate = ({ mybitPrice, USD_MYB_SYMBOL }) => (
  <div>
    {!mybitPrice && (
    <StyledLoader indicator={antIcon} />
        )}
    <ExchangeRateSpan>
      {mybitPrice && `$${mybitPrice}`}{' '}
      <b>{USD_MYB_SYMBOL}</b>
    </ExchangeRateSpan>
  </div>
);

ExchangeRate.defaultProps = {
  mybitPrice: undefined,
  USD_MYB_SYMBOL: 'USD/MYB',
};

ExchangeRate.propTypes = {
  mybitPrice: PropTypes.number,
  USD_MYB_SYMBOL: PropTypes.string,
};

export default ExchangeRate;
