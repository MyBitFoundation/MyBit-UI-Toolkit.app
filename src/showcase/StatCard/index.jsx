import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import 'antd/lib/style/css';
import StyledStatCard from './styledStatCard';
import StyledTitle from './styledTitle';
import StyledValue from './styledValue';
import StyledLoadingPlaceholder from './styledPlaceholder';

const StatCard = ({ stat }) => (
  <StyledStatCard>
    <StyledTitle>{stat.name}</StyledTitle>
    <StyledLoadingPlaceholder>
      { (stat.value !== undefined) && <StyledValue>{stat.value}</StyledValue> }
      { (stat.value === undefined) && <Skeleton active title={false} paragraph={{ rows: 1, width: '100%'}}/> }
    </StyledLoadingPlaceholder>
  </StyledStatCard>
);
StatCard.propTypes = {
  stat: PropTypes.object.isRequired, //eslint-disable-line
};

export default StatCard;
