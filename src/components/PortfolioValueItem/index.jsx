import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PieChart from '../../images/chart-pie.png';

const PortfolioTile = styled.div`
  height: 78px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 283px;
`
const StyledChildDiv = styled.div`
  width: 70%;
`
const PortfolioTileImg = styled.img`
  height: 27px;
  width: 30px;
`
const ValueB = styled.b`
  color: #125ac4;
`
const ValueP = styled.p`
  padding: 2px 0px;
  margin: 0px 0px;
  color: #575757;
  line-height: 0.9;
`

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
  ownership: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default PortfolioValueItem;
