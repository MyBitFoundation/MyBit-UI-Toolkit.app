import React from 'react';
import PropTypes from 'prop-types';

import MyBitParagraphStyle from './styledParagraph';

const MyBitParagraph = ({
  children, styling,
}) => (
  <MyBitParagraphStyle styling={styling}>
    {children}
  </MyBitParagraphStyle>
);

MyBitParagraph.propTypes = {
  styling: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
};

MyBitParagraph.defaultProps = {
  styling: {
    fontSize: '16px',
    color: '#ffffff',
  },
};

export default MyBitParagraph;
