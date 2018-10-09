import React from 'react';
import PropTypes from 'prop-types';

import { PortfolioTile, StyledChildDiv, RevenueB, RevenueP } from './styledComponents';

const RevenueHeader = props => (
  <PortfolioTile>
    <StyledChildDiv>
      <RevenueP>Total Asset Revenue:</RevenueP>
      <RevenueB>${props.totalRevenue}</RevenueB>
    </StyledChildDiv>
  </PortfolioTile>
);

RevenueHeader.propTypes = {
  totalRevenue: PropTypes.string.isRequired,
};

export default RevenueHeader;
