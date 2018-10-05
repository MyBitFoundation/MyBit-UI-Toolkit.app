import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar';
import AssetWrapper from './styledAssetWrapper';
import locationIcon from './Location-icon.svg';

const AssetCard = ({
  // clickHandler,
  funded,
  goal,
  city,
  country,
  name,
  category,
  id,
  backgroundImage,
  fundingStage,
  pastDate,
}) => {
  const assetFunded = fundingStage === '3' || fundingStage === '4';
  const barWidth = assetFunded ? '100' : `${Math.ceil((funded / goal) * 100)}`;
  const goalFormatted = Number(goal)
    .toLocaleString(
      'en-US',
      {
        style: 'currency',
        currency: 'USD',
      },
    );
  return (
    <AssetWrapper image={backgroundImage}>
      <div className="container">

        <div className="image-holder">
          <div className="image-holder-gradient" />
          <img
            alt="Location icon"
            className="image-holder-location-icon"
            src={locationIcon}
          />
          <b className="image-holder-name">{name}</b>
          <p className="image-holder-location">
            {city}, <span>{country}</span>
          </p>
        </div>

        <div className="details">
          <p className="details-funded">
            Funded: <b>{assetFunded ? goalFormatted : `$${Math.round(funded)}`}</b>
          </p>
          <p className="details-goal">
            Goal:{' '}
            <b>{goalFormatted}</b>
          </p>

          {pastDate ?
            <ProgressBar
              percent={barWidth}
              status="exception"
              showInfo={false}
            />
            :
            <ProgressBar
              percent={barWidth}
              status={assetFunded ? 'success' : 'active'}
              showInfo={false}
            />
          }

          <div className="center-button">
            <Link
              to={`/explore/${category}/${id}`}
              href={`/explore/${category}/${id}`}
            >
              <button
                onClick={() => {}}
                className="details-contribute"
                disabled={false}
              >
                {assetFunded || pastDate ? 'View Asset' : 'Contribute'}
              </button>
            </Link>
          </div>
        </div>

      </div>
    </AssetWrapper>
  );
};

AssetCard.propTypes = {
  funded: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  city: PropTypes.string,
  country: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string.isRequired,
  // clickHandler: PropTypes.func,
  id: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  fundingStage: PropTypes.string.isRequired,
  pastDate: PropTypes.bool.isRequired,
};

AssetCard.defaultProps = {
  city: '',
  country: '',
  name: '',
  // clickHandler: () => {},
};

export default AssetCard;
