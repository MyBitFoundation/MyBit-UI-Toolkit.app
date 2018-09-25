import React from 'react';
import PropTypes from 'prop-types';

import { PortfolioTile, StyledChildDiv, PortfolioTileImg, RevenueB, RevenueP } from './styledComponents';
import BarChart from '../../images/chart-bar.png';

const RevenueHeader = props => (
  <PortfolioTile>
    <PortfolioTileImg src={BarChart} alt="Bar chart" />
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
