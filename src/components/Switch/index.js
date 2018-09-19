import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch as SwitchAnt } from 'antd';
import 'antd/lib/switch/style/css';
import Icon from '../Icon';


const StyledSwitch = styled.div`
  display: inline-block;
  .ant-switch{
    background-color: ${props => props.styling.unchecked.backgroundColor};
  }
  .ant-switch-checked{
    background-color: ${props => props.styling.checked.backgroundColor};
  }
  .ant-btn-clicked:after{
    border: 0 solid ${props => props.styling.checked.backgroundColor};
  }
`;


const Switch = props => (
  <StyledSwitch styling={props.styling}>
    <SwitchAnt
      checkedChildren={<Icon type="check" />}
      unCheckedChildren={<Icon type="cross" />}
      checked={props.checked}
      size={props.size}
      onChange={props.onChange}
    />
  </StyledSwitch>
);

Switch.propTypes = {
  styling: PropTypes.object.isRequired, //eslint-disable-line 
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
};

Switch.defaultProps = {
  size: 'small',
  checked: false,
};

export default Switch;
