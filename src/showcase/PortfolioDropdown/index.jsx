import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import PortfolioValueItem from './portfolioItem';
import { EmptyP } from './styledComponents';
import DropdownHeader from './dropdownHeader';

const { Panel } = Collapse;

const PortfolioDropdown = ({
  name, total, icon, color, portfolioData,
}) => (
  <Collapse >
    <Panel
      key="1"
      header={
        <DropdownHeader type={icon} color={color} total={total}>{name}</DropdownHeader>
      }
    >
      {portfolioData.length === 0 && (
        <EmptyP>
          You do not have any<br />
          investments right now.
        </EmptyP>
      )}
      {portfolioData.length > 0 && portfolioData.map(asset => (
        <PortfolioValueItem
          key={asset.assetID}
          id={`${asset.assetID}`}
          color={color}
          icon={icon}
          assetID={asset.assetID}
          name={asset.name}
          data={asset.data}
        />
      ))}
    </Panel>
  </Collapse>
);

PortfolioDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  portfolioData: PropTypes.arrayOf(PropTypes.shape({
    assetID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
  })).isRequired,
};

export default PortfolioDropdown;
