import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import 'antd/lib/style/css';

const ProgressBar = ({
  size, percent, status, showInfo,
}) => (
  <Progress size={size} percent={percent} status={status} showInfo={showInfo} />
);

ProgressBar.propTypes = {
  size: PropTypes.string,
  percent: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['success', 'exception', 'active']).isRequired,
  showInfo: PropTypes.bool,
};

ProgressBar.defaultProps = {
  size: '',
  showInfo: true,
};

export default ProgressBar;

