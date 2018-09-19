import React from 'react';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';
import styled from 'styled-components';

const StyledStatCard = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 5px;
  width: 180px;
  height: 87px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  flex-basis: 0;
`;

const StyledValue = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #4a4a4a;
  margin: 0px;
`;

const StyledTitle = styled.p`
  font-size: 16px;
  color: #4a4a4a;
  margin: 0px;
`;

const StyledLoadingPlaceholder = styled.div`
  .show-loading-animation.rect-shape, .show-loading-animation.round-shape, .show-loading-animation.text-row,
  .show-loading-animation .rect-shape,
  .show-loading-animation .round-shape,
  .show-loading-animation .text-row {
    animation: react-placeholder-pulse 1.5s infinite; }

  @keyframes react-placeholder-pulse {
    0% {
      opacity: .6; }
    50% {
      opacity: 1; }
    100% {
      opacity: .6; } }
`;

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
