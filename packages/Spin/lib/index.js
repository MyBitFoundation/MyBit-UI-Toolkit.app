import React from 'react';
import PropTypes from 'prop-types';
import SpinAnt from 'antd/lib/spin';
import 'antd/lib/spin/style/css';
import { withTheme } from 'styled-components';
import Theme from './theme'

import StyledSpin from './styledSpin';


const Spin = ({ size, styling, theme }) => (
    <StyledSpin theme={{ ...theme.spin, ...styling }} >
        <SpinAnt size={size} />
    </StyledSpin>
);

Spin.propTypes = {
    styling: PropTypes.object, // eslint-disable-line
    size: PropTypes.oneOf(['small', 'default', 'large']),
    theme: PropTypes.object, // esint-disable-line
};

Spin.defaultProps = {
    size: 'small',
    styling: {},
    theme: Theme,
};

export default withTheme(Spin);