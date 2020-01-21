import React from 'react';
import PropTypes from 'prop-types';
import { Switch as SwitchAnt } from 'antd';
import 'antd/lib/switch/style/css';
import Theme from '@mybit/ui.theme';

import Icon from '@mybit/ui.icon';
import StyledSwitch from './styledSwitch';

const Switch = props => (
  <StyledSwitch theme={{ ...Theme.switch, ...props.styling }}>
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
  styling: PropTypes.object, //eslint-disable-line 
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
};

Switch.defaultProps = {
  size: 'small',
  checked: false,
  styling: {},
};

export default Switch;
