import React from 'react';
import PropTypes from 'prop-types';
import StyledBox from './styledBox';
import StyledWrapper from './styledWrapper';

const AssetInvestmentStatus = ({
  className, raised, goal, investors,
}) => (
  <StyledWrapper className={className}>
    <StyledBox border className="no-padding-left">
      <p className="title">Funds raised</p>
      <p className="content" >{raised}</p>
    </StyledBox>
    <StyledBox border black>
      <p className="title">Funding goal</p>
      <p className="content">{goal}</p>
    </StyledBox>
    <StyledBox border={false} black>
      <p className="title">Number of investors so far</p>
      <p className="content">{investors}</p>
    </StyledBox>
  </StyledWrapper>
);

AssetInvestmentStatus.propTypes = {
  raised: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  investors: PropTypes.number,
  className: PropTypes.string,
};

AssetInvestmentStatus.defaultProps = {
  investors: 0,
  className: '',
};

export default AssetInvestmentStatus;

