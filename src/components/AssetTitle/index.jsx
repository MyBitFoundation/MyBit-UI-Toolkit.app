import React from 'react';
import PropTypes from 'prop-types';
import LocationIcon from './location.png';
import { StyledWrapper, StyledAssetName, StyledLocationWrapper, StyledImg } from './styledComponents';

const AssetTitle = ({
  assetName, city, country, className,
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
  className: PropTypes.string,
};

AssetTitle.defaultProps = {
  className: '',
};

export default AssetTitle;

