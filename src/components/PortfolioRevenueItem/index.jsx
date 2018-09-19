import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LineChart from '../../images/chart-line.png';

const PortfolioTile = styled.div`
  height: 78px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 283px;
`;
const StyledChildDiv = styled.div`
  width: 70%;
`;
const PortfolioTileImg = styled.img`
  height: 27px;
  width: 30px;
`;
const RevenueB = styled.b`
  color: #2db84b;
`;
const RevenueP = styled.p`
  padding: 2px 0px;
  margin: 0px 0px;
  color: #575757;
  line-height: 0.9;
`;

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
