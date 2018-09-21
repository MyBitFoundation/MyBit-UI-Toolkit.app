import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LocationIcon from '../../images/location.png'

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: 700;
`
const StyledAssetName = styled.div`
    font-size: 34px;
    color: #383838;
    padding-bottom: 5px;
`
const StyledLocationWrapper = styled.div`
    display: inline-block;
    font-size: 18px;
    color: #383838;
    font-weight: normal;
`
const StyledImg = styled.img`
    height: 20px;
    margin-right: 13px;
    transform: translateY(-2px);
`

const AssetTitle = ({
  assetName, city, country, className
}) => (
  <StyledWrapper className={className}>
    <StyledAssetName>{assetName}</StyledAssetName>
    <StyledLocationWrapper>
        <StyledImg src={LocationIcon} />
        {city}, {country}
    </StyledLocationWrapper>
  </StyledWrapper>
);

AssetTitle.propTypes = {
  assetName: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  className: PropTypes.string
};

AssetTitle.defaultProps = {};

export default AssetTitle;

