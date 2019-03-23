import React from 'react';
import StyledSwitchWithLabel from './StyledSwitchWithLabel';
import Switch from '@mybit/ui.switch';
import StyledLabelForSwitch from './StyledLabelForSwitch';

const SwitchWithLabel = ({
  size, checked, handleClick, stylingSwitch, styling, onChange, label, // eslint-disable-line
}) => (
  <StyledSwitchWithLabel styling={stylingSwitch}>
    <Switch
      size="small"
      checked={checked}
      styling={styling}
      onChange={newchecked => handleClick(newchecked)}
    />
    <StyledLabelForSwitch>
      {label}
    </StyledLabelForSwitch>
  </StyledSwitchWithLabel>
);

export default SwitchWithLabel;
