import React from 'react';
import PropTypes from 'prop-types';
import NavigationOption from '@pbteja-dev/ui.kit.navigation-option';
import StyledWrapper from './styledWrapper';

const NavigationBar = ({ clickHandler, currentPath, menuOptions }) => {
  const navBarOptions = menuOptions.map(menuItem => (
    <NavigationOption
      url={menuItem.url}
      key={menuItem.name}
      name={menuItem.name}
      icon={menuItem.icon}
      selectable={menuItem.selectable}
      selected={menuItem.url === currentPath}
      clickHandler={clickHandler}
    />
  ));
  return (
    <StyledWrapper>
      {navBarOptions}
    </StyledWrapper>
  );
};

NavigationBar.propTypes = {
  clickHandler: PropTypes.func,
  currentPath: PropTypes.string.isRequired,
  menuOptions: PropTypes.array.isRequired, //eslint-disable-line
};

NavigationBar.defaultProps = {
  clickHandler: () => { },
};

export default NavigationBar;
