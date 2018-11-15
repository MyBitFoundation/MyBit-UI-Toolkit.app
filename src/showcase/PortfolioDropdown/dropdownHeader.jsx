import React from 'react';
import PropTypes from 'prop-types';
import { Icon as IconAnt } from 'antd';
import 'antd/lib/icon/style/css';
import { PortfolioTile, StyledChildDiv, ValueB, ValueP } from './styledComponents';


const ValueHeader = props => (
  <PortfolioTile>
    <IconAnt type={props.type} fill={props.color} style={{ color: props.color, fontSize: '30px' }}width="30px" height="30px" />
    <StyledChildDiv>
      <ValueP>{props.children}</ValueP>
      <ValueB color={props.color} >${props.total}</ValueB>
    </StyledChildDiv>
  </PortfolioTile>
);

ValueHeader.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ValueHeader;
