import React from 'react';
import PropTypes from 'prop-types';
import PieChart from '../../images/chart-pie.png';
import { PortfolioTile, StyledChildDiv, PortfolioTileImg, ValueB, ValueP } from './styledComponents';


const ValueHeader = props => (
  <PortfolioTile>
    <PortfolioTileImg src={PieChart} alt="Pie chart" />
    <StyledChildDiv>
      <ValueP>Total Portfolio Value:</ValueP>
      <ValueB>${props.totalRevenue}</ValueB>
    </StyledChildDiv>
  </PortfolioTile>
);

ValueHeader.propTypes = {
  totalRevenue: PropTypes.string.isRequired,
};

export default ValueHeader;
