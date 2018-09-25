import React from 'react';
import PropTypes from 'prop-types';
import LineChart from '../../images/chart-line.png';
import { PortfolioTile, PortfolioTileImg, StyledChildDiv, RevenueB, RevenueP } from './styledComponents';

const PortfolioRevenueItem = ({
  assetID,
  name,
  totalRevenue,
  monthlyRevenue,
}) => (
  <PortfolioTile key={assetID} >
    <PortfolioTileImg src={LineChart} alt="Line chart" />
    <StyledChildDiv>
      <RevenueP>{name}</RevenueP>
      <RevenueP>
          Total Revenue: <RevenueB>${totalRevenue}</RevenueB>
      </RevenueP>
      <RevenueP>
          Monthly Revenue: <RevenueB>${monthlyRevenue}</RevenueB>
      </RevenueP>
    </StyledChildDiv>
  </PortfolioTile>
);

PortfolioRevenueItem.propTypes = {
  assetID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  monthlyRevenue: PropTypes.number.isRequired,
  totalRevenue: PropTypes.number.isRequired,
};

export default PortfolioRevenueItem;
