import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Menu, Dropdown as DropdownAnt, Icon } from 'antd';
import 'antd/lib/dropdown/style/css';
import Theme from '../theme';


const GlobalStyle = createGlobalStyle`
  .ant-dropdown-menu-item:hover,
  .ant-dropdown-menu-submenu-title:hover{
    background-color: ${Theme.dropdown.submenu.colorHover};
  }
`;

const StyledDropdown = styled.div`
  .ant-dropdown-trigger{
    color: ${props => props.styling.trigger.color};

    &:hover{
      color: ${props => props.styling.trigger.colorHover};
    }
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
  selected, menu, handleClick, placement, styling, trigger,
}) => (
  <Fragment>
    <GlobalStyle />
    <StyledDropdown styling={styling}>
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
  styling: PropTypes.object.isRequired, // eslint-disable-line
  selected: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  placement: PropTypes.string.isRequired,
  trigger: PropTypes.string.isRequired,
};

export default Dropdown;
