import React from 'react';
import PropTypes from 'prop-types';
import { PortfolioTile, StyledChildDiv, RevenueB, RevenueP } from './styledComponents';

const PortfolioRevenueItem = ({
  assetID,
  name,
  totalRevenue,
  monthlyRevenue,
}) => (
  <PortfolioTile key={assetID} >
    {/* <PortfolioTileImg src={LineChart} alt="Line chart" /> */}
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
