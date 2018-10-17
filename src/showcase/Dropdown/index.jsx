import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTheme, createGlobalStyle } from 'styled-components';
import { Menu, Dropdown as DropdownAnt, Icon } from 'antd';
import 'antd/lib/style/css';

import Theme from '../theme';
import StyledDropdown from './styledDropdown';

const GlobalStyle = createGlobalStyle`
  .ant-dropdown-menu-item:hover,
  .ant-dropdown-menu-submenu-title:hover{
    background-color: ${props => props.theme.submenuColorHover};
  }
`;

const getMenu = (menu, handleClick) => (
  <Menu>
    {menu.map(item => (
      <Menu.Item key={item} onClick={() => handleClick(item)}>
        <span>{item}</span>
      </Menu.Item>
    ))}
  </Menu>
);

const Dropdown = ({
  selected, menu, handleClick, placement, styling, theme, trigger,
}) => (
  <Fragment>
    <GlobalStyle theme={{ ...theme.dropdown, ...styling }}/>
    <StyledDropdown theme={{ ...theme.dropdown, ...styling }}>
      <DropdownAnt
        overlay={getMenu(menu, handleClick)}
        placement={placement}
        trigger={[trigger]}
      >
        <span>
          {selected} <Icon type="down" />
        </span>
      </DropdownAnt>
    </StyledDropdown>
  </Fragment>
);

Dropdown.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  styling: PropTypes.object, // eslint-disable-line
  selected: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  placement: PropTypes.string.isRequired,
  trigger: PropTypes.string.isRequired,
  theme: PropTypes.object,// eslint-disable-line
};

Dropdown.defaultProps = {
  styling: {},
  theme: Theme,
};

export default withTheme(Dropdown);
