import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Calendar from '../../images/calendar.png'
import { getStringFromDate, getRemainingTime } from './date_utils'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    > .title-wrapper {
        display: inline-block;
        color: #125ac4;
        font-size: 20px;
        font-weight: 700;
        > .calendar {
            height: 20px;
            margin-right: 13px;
            transform: translateY(-2px);
        };
    };
    > .text {
        font-size: 14px;
        color: #383838;
        padding-top: 6px;
    }
`

const AssetDeadlineStatus = ({
  status, deadline
}) => {
    switch(status) {
        case 'expired':
            return (
                <StyledWrapper>
                    <div className={"title-wrapper"}>
                        <img src={Calendar} className={"calendar"} />
                        Funding period has ended 
                    </div>
                    <div className={"text"}>
                        Funding period has ended on {getStringFromDate(deadline)}
                    </div>
                </StyledWrapper>
            )
        case 'active':
            return (
                <StyledWrapper>
                    <div className={"title-wrapper"}>
                        <img src={Calendar} className={"calendar"} />
                        {getRemainingTime(deadline)}
                    </div>
                    <div className={"text"}>
                        Funding period ends on {getStringFromDate(deadline)}
                    </div>
                </StyledWrapper>
            )
        case 'funded':
            return (
                <StyledWrapper>
                    <div className={"title-wrapper"}>
                        <img src={Calendar} className={"calendar"} />
                        Funding goal has been reached
                    </div>
                </StyledWrapper>
            )
        default:
            return (
                <div>PropTypes.oneOf(['expired', 'active', 'funded']).isRequired</div>
            )
    }
};

AssetDeadlineStatus.propTypes = {
    status: PropTypes.oneOf(['expired', 'active', 'funded']).isRequired,
    deadline: PropTypes.instanceOf(Date).isRequired
};

AssetDeadlineStatus.defaultProps = {};

export default AssetDeadlineStatus;
