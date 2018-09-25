import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './styledLink';

const CategoryCard = ({
  image, path, name,
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
