import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import styled from 'styled-components';

import BarChart from '../../images/chart-bar.png';
import PortfolioRevenueItem from '../PortfolioRevenueItem';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

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

const EmptyP = styled.p`
    color: #575757;
    background-color: #f5f7fa;
    text-align: right;
    font-size: 16px;
    line-height: 22px !important;
    padding-top: 22px !important;
    padding-bottom: 22px !important;
    padding-right: 31px !important;
`;

const TotalPortfolioRevenue = ({
    totalPortfolioRevenue,
    portfolioRevenueAssets,
}) => ( 
    <Collapse onChange={callback}>
    <Panel header={RevenueHeader(totalPortfolioRevenue)} key={"1"}>
        {portfolioRevenueAssets.length === 0 && (
            <EmptyP>
                You do not have any<br />
                investments right now.
        </EmptyP>
        )}
      {portfolioRevenueAssets.map(asset => (
        <PortfolioRevenueItem
          key={asset.assetID}
          assetID={asset.assetID}
          name={asset.name}
          monthlyRevenue={asset.monthlyRevenue}
          totalRevenue={asset.totalRevenue}
        />
        ))}
    </Panel>
  </Collapse>
);

TotalPortfolioRevenue.propTypes = {
  totalPortfolioRevenue: PropTypes.string.isRequired,
  portfolioRevenueAssets: PropTypes.arrayOf(PropTypes.shape({
    assetID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    monthlyRevenue: PropTypes.string.isRequired,
    totalRevenue: PropTypes.string.isRequired,
  })).isRequired,
};

export default TotalPortfolioRevenue;
