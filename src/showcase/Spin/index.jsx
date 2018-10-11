import React from 'react';
import PropTypes from 'prop-types';
import SpinAnt from 'antd/lib/spin';
import 'antd/lib/spin/style/css';

import StyledSpin from './styledSpin';


const Spin = ({ size, styling }) => (
  <StyledSpin styling={styling}>
    <SpinAnt size={size} />
  </StyledSpin>
);

Spin.propTypes = {
  styling: PropTypes.object.isRequired, // eslint-disable-line
  size: PropTypes.oneOf(['small', 'default', 'large']),
};

Spin.defaultProps = {
  size: 'small',
};

export default Spin;
