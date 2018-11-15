import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import 'antd/lib/progress/style/css';
import { withTheme } from 'styled-components';
import StyledProgressBar from './styledProgressBar';
import Theme from '../theme';

const ProgressBar = ({
  size, percent, status, showInfo, styling, theme
}) => (
  <StyledProgressBar theme={{...theme.progressbar, ...styling}}>
    <Progress size={size} percent={percent} status={status} showInfo={showInfo} />
  </StyledProgressBar>
);

ProgressBar.propTypes = {
  size: PropTypes.string,
  percent: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['success', 'exception', 'active']).isRequired,
  showInfo: PropTypes.bool,
  theme: PropTypes.object, // eslint-disable-line
  styling: PropTypes.object, // eslint-disable-line
};

ProgressBar.defaultProps = {
  size: '',
  showInfo: true,
  theme: Theme,
  styling: {},
};

export default withTheme(ProgressBar);

