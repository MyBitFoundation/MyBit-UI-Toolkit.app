import React from 'react';
import PropTypes from 'prop-types';
import StyledStats from './styledStats';
import StatCard from '../StatCard';

const getStat = stat => <StatCard key={stat.name} stat={stat} />;

const Stats = props => (
  <StyledStats>
    {props.stats.map(getStat)}
  </StyledStats>
);

Stats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Stats;
