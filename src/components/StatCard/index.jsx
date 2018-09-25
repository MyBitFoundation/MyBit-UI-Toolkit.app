import React from 'react';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';

import StyledStatCard from './styledStatCard';
import StyledTitle from './styledTitle';
import StyledValue from './styledValue';
import StyledLoadingPlaceholder from './styledPlaceholder';

const StatCard = ({ stat }) => (
  <StyledStatCard>
    <StyledTitle>{stat.name}</StyledTitle>
    <StyledLoadingPlaceholder>
      <ReactPlaceholder type="textRow" ready={stat.value !== undefined} color="#E0E0E0" showLoadingAnimation style={{ width: `${stat.loadingSize}px`, height: '21px' }}>
        <StyledValue>{stat.value}</StyledValue>
      </ReactPlaceholder>
    </StyledLoadingPlaceholder>
  </StyledStatCard>
);
StatCard.propTypes = {
  stat: PropTypes.object.isRequired, //eslint-disable-line
};

export default StatCard;
