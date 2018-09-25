/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
// TODO: Fix the JSX linting errors
import React from 'react';
import PropTypes from 'prop-types';
import { StyledImg, StyledLink, StyledNavOption, StyledP } from './styledComponents';

const NavigationOption = ({
  name, icon, selectable, selected, url,
}) => (
  <StyledLink
    to={url || '/'}
    href={url || '/'}
  >
    <StyledNavOption selectable={selectable} selected={selected}>
      <StyledImg alt={name} src={icon} />
      <StyledP>{name}</StyledP>
    </StyledNavOption>
  </StyledLink>
);

NavigationOption.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  url: PropTypes.string,
};

NavigationOption.defaultProps = {
  selected: false,
  selectable: false,
  url: '',
};

export default NavigationOption;
