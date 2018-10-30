import React from 'react';
import PropTypes from 'prop-types';
import { PortfolioTile, StyledChildDiv, ValueB, ValueP } from './styledComponents';


const ValueHeader = props => (
  <PortfolioTile>
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
