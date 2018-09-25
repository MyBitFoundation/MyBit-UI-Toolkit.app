import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';

import PortfolioRevenueItem from '../PortfolioRevenueItem';
import { EmptyP } from './styledComponents';
import RevenueHeader from './revenueHeader';

const { Panel } = Collapse;

function callback(key) {
  console.log(key); // eslint-disable-line
}

const TotalPortfolioRevenue = ({
  totalPortfolioRevenue,
  portfolioRevenueAssets,
}) => (
  <Collapse onChange={callback}>
    <Panel header={<RevenueHeader totalRevenue={totalPortfolioRevenue} />} key="1">
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
