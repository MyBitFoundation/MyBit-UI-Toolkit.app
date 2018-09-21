import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    > .no-padding-left { 
        padding-left: 0px;
        text-align: left;
    }
`

const StyledBox = styled.div`
    padding: 0px 20px;
    border-right: ${props => props.border ? '1px solid black' : 'none' };
    text-align: center;
    > .title {
        font-size: 14px;
        font-weight: 500;
        color: #383838;
        line-height: 1.5;
        margin: 0;
        padding: 0;
    };
    > .content {
        font-size: 18px;
        color: ${props => props.black ? 'black' : 'rgb(45, 184, 75)'};
        font-weight: 700;
        margin: 0;
        padding: 0;
    }
`



const AssetInvestmentStatus = ({
    className, raised, goal, investors
}) => (
    <StyledWrapper className={className}>
        <StyledBox border={true} className='no-padding-left'>
            <p className={"title"}>Funds raised</p>
            <p className={"content"} >{raised}</p>
        </StyledBox>
        <StyledBox border={true} black={true}>
            <p className={"title"}>Funding goal</p>
            <p className={"content"}>{goal}</p>
        </StyledBox>
        <StyledBox border={false} black={true}>
            <p className={"title"}>Number of investors so far</p>
            <p className={"content"}>{investors}</p>
        </StyledBox>
    </StyledWrapper>
);

AssetInvestmentStatus.propTypes = {
    raised: PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    investors: PropTypes.number,
    className: PropTypes.string
};

AssetInvestmentStatus.defaultProps = {
    investors: 0
};

export default AssetInvestmentStatus;

