import React from 'react';
import PropTypes from 'prop-types';
import PieChart from '../../images/chart-pie.png';
import PortfolioValueItem from '../PortfolioValueItem';
import { Collapse } from 'antd';
import styled from 'styled-components';

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
const ValueB = styled.b`
  color: #125ac4;
`;
const ValueP = styled.p`
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
`

const ValueHeader = (totalRevenue) => (
    <PortfolioTile>
        <PortfolioTileImg src={PieChart} alt="Pie chart" />
        <StyledChildDiv>
            <ValueP>Total Portfolio Value:</ValueP>
            <ValueB>${totalRevenue}</ValueB>
        </StyledChildDiv>
    </PortfolioTile>
)

const TotalPortfolioValue = ({ totalPortfolioValue, portfolioValueAssets }) => (
    <Collapse onChange={callback}>
        <Panel header={ValueHeader(totalPortfolioValue)} key={"1"}>
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
