import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../theme';
import StyledHeading from './styledHeading';

const MyBitHeading = ({
  children, styling, size,
}) => {
  const Heading = `h${size}`;

  return (
    <StyledHeading styling={styling}>
      <Heading>
        {children}
      </Heading>
    </StyledHeading>
  );
};

MyBitHeading.propTypes = {
  styling: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

MyBitHeading.defaultProps = {
  styling: Theme.heading,
};

export default MyBitHeading;
