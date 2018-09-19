import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatCard from '../StatCard';

const StyledStats = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -50px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    display: none;
  }

`;

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
