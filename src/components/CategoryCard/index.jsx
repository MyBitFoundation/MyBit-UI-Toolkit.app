import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  height: 310px;
  width: 310px; 
  margin: 0px 10px 20px 15px;
  padding: 0px;
  text-decoration: none;
  > .category-image {
    width: 310px;
    height: 310px;
    margin: 0 auto;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: linear-gradient(#24f281, #0083ff) 1;
    background-image: ${props => `url(${props.image})`};
    border: 6px solid white;
    > .category-name {
      width: 98%;
      margin: 0 auto;
      text-align: center;
      font-size: 36px;
      line-height: 42px;
      font-family: 'Gilroy';
      font-weight: bold;
      color: #ffffff;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      position: relative;
      padding: 0px 10px;
    };
  };
  > .category-image:hover {
      border-style: solid;
      border-width: 6px;
      border-image: linear-gradient(#24f281, #0083ff) 1;
      cursor: pointer;
  };
};
`

const CategoryCard = ({
  image, path, name
}) => (
    <StyledLink
      image={image}
      to={path}
      href={path}
      key={path}
      className="category-link"
    >
      <div className="category-image">
        <p className="category-name">{name}</p>
      </div>
    </StyledLink>
  );

CategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

CategoryCard.defaultProps = {};

export default CategoryCard;
