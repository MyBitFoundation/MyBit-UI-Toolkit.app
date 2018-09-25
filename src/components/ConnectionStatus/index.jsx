import React from 'react';
import PropTypes from 'prop-types';

import StyledCircleIndicator from './styledCircleIndicator';
import StyledSpan from './styledSpan';
import StyledConnectionStatus from './styledConnectionStatus';


const ConnectionStatus = (props) => {
  let network;
  let circleColor;
  let toRender = '';
  switch (props.network) {
    case 'main': { network = 'Mainnet'; circleColor = 'green'; break; }
    case 'ropsten': { network = 'Testnet'; circleColor = 'red'; break; }
    default: { network = 'unknown network'; circleColor = 'gray'; break; }
  }
  toRender = props.loading ? 'Loading network...' : `Connected to ${network}`;
  return (
    <StyledConnectionStatus>
      <StyledCircleIndicator circleColor={circleColor} />
      <StyledSpan>{toRender}</StyledSpan>
    </StyledConnectionStatus>
  );
};

ConnectionStatus.propTypes = {
  network: PropTypes.oneOf(['main', 'ropsten', undefined]),
  loading: PropTypes.bool,
};

ConnectionStatus.defaultProps = {
  network: undefined,
  loading: false,
};

export default ConnectionStatus;
