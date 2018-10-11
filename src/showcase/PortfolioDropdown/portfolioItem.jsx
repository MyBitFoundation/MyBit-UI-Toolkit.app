import React from 'react';
import PropTypes from 'prop-types';
import { Icon as IconAnt } from 'antd';
import { PortfolioTile, StyledChildDiv, ValueB, ValueP } from './styledComponents';

const PortfolioItem = ({
  id, name, data, icon, color,
}) => (
  <PortfolioTile key={id} >
    <IconAnt type={icon} fill={color} style={{ color, fontSize: '30px' }}width="30px" height="30px" />
    <StyledChildDiv>
      <ValueP>{name}</ValueP>
      {Object.keys(data).map(key => (
        <ValueP key={key}>
          {key}: <ValueB>{data[key]}</ValueB>
        </ValueP>
      ))}
    </StyledChildDiv>
  </PortfolioTile>
);

PortfolioItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired, // eslint-disable-line
};

export default PortfolioItem;
