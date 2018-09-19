import PropTypes from 'prop-types';
import styled from 'styled-components';
import SpinAnt from 'antd/lib/spin';
import 'antd/lib/spin/style/css';

const StyledSpin = styled.span`
  .ant-spin-dot i{
    background-color: ${props => props.styling.color};
  }
`;

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
