import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import 'antd/lib/style/css';
import PortfolioValueItem from '../PortfolioValueItem';
import { EmptyP } from './styledComponents';
import ValueHeader from './valueHeader';

const { Panel } = Collapse;

function callback(key) {
  console.log(key); //eslint-disable-line
}

const TotalPortfolioValue = ({ totalPortfolioValue, portfolioValueAssets }) => (
  <Collapse onChange={callback}>
    <Panel header={<ValueHeader totalRevenue={totalPortfolioValue} />} key="1">
      {portfolioValueAssets.length === 0 && (
        <EmptyP>
          You do not have any<br />
          investments right now.
        </EmptyP>
      )}
      {portfolioValueAssets.map(asset => (
        <PortfolioValueItem
          key={asset.assetID}
          assetID={asset.assetID}
          name={asset.name}
          ownership={asset.ownership}
          value={asset.value}
        />
      ))}
    </Panel>
  </Collapse>
);

TotalPortfolioValue.propTypes = {
  totalPortfolioValue: PropTypes.string.isRequired,
  portfolioValueAssets: PropTypes.arrayOf(PropTypes.shape({
    assetID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ownership: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default TotalPortfolioValue;
