import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCircleIndicator = styled.div`
  width: 6px;
  height: 6px;
  background-color: ${props => props.circleColor};
  border-radius: 50%;
  display: inline-block;
`;

const StyledSpan = styled.span`
  margin-left: 10px;
`;

const StyledConnectionStatus = styled.div`
  text-align: center;
  position: relative;
  top: -17px;
`;

const ConnectionStatus = (props) => {
  let network;
  let circleColor;
  let toRender = '';
  switch (props.network) {
    case 'main': { network = 'Mainnet'; circleColor = 'green'; break; }
    case 'ropsten': { network = 'Testnet'; circleColor = 'red'; break; }
    default: break;
  }
  if (props.loading) {
    toRender = 'Loading network...';
  } else if (network) {
    toRender = `Connected to ${network}`;
  } else {
    toRender = 'Connected to unknown network';
  }
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
