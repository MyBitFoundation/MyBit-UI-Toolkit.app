import React from 'react';
import PropTypes from 'prop-types';
import { PortfolioTile, StyledChildDiv, ValueB, ValueP, PortfolioTileImg } from './styledComponents';
import PieChart from './chart-pie.png';

const PortfolioValueItem = ({
  assetID, name, ownership, value,
}) => (
  <PortfolioTile key={assetID} >
    <PortfolioTileImg src={PieChart} alt="Pie chart" />
    <StyledChildDiv>
      <ValueP>{name}</ValueP>
      <ValueP>
        Ownership: <ValueB>{ownership}%</ValueB>
      </ValueP>
      <ValueP>
        Value: <ValueB>${value}</ValueB>
      </ValueP>
    </StyledChildDiv>
  </PortfolioTile>
);

PortfolioValueItem.propTypes = {
  assetID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ownership: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default PortfolioValueItem;
