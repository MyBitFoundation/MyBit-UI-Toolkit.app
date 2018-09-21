import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import locationIcon from '../../images/Location-icon.svg';
import styled from 'styled-components';
import ProgressBar from '../ProgressBar'

const AssetWrapper = styled.div`
  margin-bottom: 30px;
  padding: 0px;
  position: relative;
  width: 325px;
  > .container {
    width: 90%;
    height: 298px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    > .image-holder {
        background-size: cover;
        background-position: center;
        height: 196px;
        position: relative;
        background-image: ${props => `url(${props.image})`};
        > .image-holder-gradient {
          position: relative;
          top: 0px;
          height: 196px;
          width: 100%;
          background-image: linear-gradient(to left, #0b3f9c, #0083FF) !important;
          z-index: -1;
        };
        > .image-holder-location-icon {
          position: absolute;
          bottom: 18px;
          left: 21px;
          z-index: 1;
        };
        > .image-holder-name {
          position: absolute;
          bottom: 40px;
          font-size: 18px;
          color: #ffffff;
          left: 21px;
          z-index: 1;
          font-weight: bold;
        };
        > .image-holder-location {
          position: absolute;
          bottom: 2px;
          font-size: 14px;
          color: #ffffff;
          padding-left: 42px;
          z-index: 1;
        }
    };

    > .image-holder:after {
        content: ' ';
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.35), transparent 80px, transparent);
    };

    > .details {
        padding: 5px 10px 0px 10px;
        > .details-funded {
            width: max-content;
            float: left;
            font-size: 14px;
            padding: 0 3px;
            margin: 0;
        };
        > .details-goal {
            text-align: right;
            font-size: 14px;
            padding: 0 5px;
            margin: 0;
        };
        > .center-button {
            width: 100%;
            text-align: center;
            > a > .details-contribute {
                height: 32px;
                font-size: 14px;
                width: 126px;
                font-family: 'Roboto';
                background-color: #2E58DA;
                font-weight: bold;
                color: white;
                border: none;
                cursor: pointer;
                margin-top: 10px;
            };
        };
    };
  };
`

const AssetCard = ({
  clickHandler,
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
                status={"exception"}
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

AssetCard.defaultProps = {
  clickHandler: undefined,
};

AssetCard.propTypes = {
  funded: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  city: PropTypes.string,
  country: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  id: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  fundingStage: PropTypes.string.isRequired,
  pastDate: PropTypes.bool.isRequired,
};

AssetCard.defaultProps = {
  city: '',
  country: '',
  name: '',
  clickHandler: () => {},
};

export default AssetCard;
