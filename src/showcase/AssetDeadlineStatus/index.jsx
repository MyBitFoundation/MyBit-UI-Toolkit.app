import React from 'react';
import PropTypes from 'prop-types';
import { Icon as IconAnt } from 'antd';
import 'antd/lib/style/css';
import { getStringFromDate, getRemainingTime } from './date_utils';
import StyledWrapper from './styledWrapper';

const CalendarIcon = <IconAnt type="calendar" style={{ color: '#7f7f7f', marginRight: '0.25em' }} width="20px" height="20px" />;

const AssetDeadlineStatus = ({
  status, deadline,
}) => {
  switch (status) {
    case 'expired':
      return (
        <StyledWrapper>
          <div className="title-wrapper">
            {CalendarIcon}
            Funding period has ended
          </div>
          <div className="text">
            Funding period has ended on {getStringFromDate(deadline)}
          </div>
        </StyledWrapper>
      );
    case 'active':
      return (
        <StyledWrapper>
          <div className="title-wrapper">
            {CalendarIcon}
            {getRemainingTime(deadline)}
          </div>
          <div className="text">
            Funding period ends on {getStringFromDate(deadline)}
          </div>
        </StyledWrapper>
      );
    case 'funded':
      return (
        <StyledWrapper>
          <div className="title-wrapper">
            {CalendarIcon}
            Funding goal has been reached
          </div>
        </StyledWrapper>
      );
    default:
      return (
        <div />
      );
  }
};

AssetDeadlineStatus.propTypes = {
  status: PropTypes.oneOf(['expired', 'active', 'funded']).isRequired,
  deadline: PropTypes.instanceOf(Date).isRequired,
};

AssetDeadlineStatus.defaultProps = {};

export default AssetDeadlineStatus;
