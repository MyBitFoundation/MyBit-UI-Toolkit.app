import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'antd/lib/alert';
import 'antd/lib/alert/style/css';
import StyledAlert from './styledAlert';


const AlertMessage = props => (
  <StyledAlert>
    <Alert
      type={props.type}
      message={props.message}
      onClose={props.handleAlertClosed}
      showIcon
      closable
    />
  </StyledAlert>
);


AlertMessage.propTypes = {
  type: PropTypes.oneOf('success', 'info', 'warning', 'error'),
  message: PropTypes.string.isRequired,
  handleAlertClosed: PropTypes.func.isRequired,
};

AlertMessage.defaultProps = {
  type: 'info',
};

export default AlertMessage;
