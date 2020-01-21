import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Menu, Dropdown as DropdownAnt, Icon } from 'antd';
import 'antd/lib/menu/style/css';
import 'antd/lib/dropdown/style/css';
import 'antd/lib/icon/style/css';
import Theme from '@mybit/ui.theme/build';

import StyledDropdown from './styledDropdown';
import StyledDropdownMenu from './styledDropdownMenu';


const getMenu = (menu, handleClick, theme, styling) => (
  <StyledDropdownMenu theme={{...theme.dropdown, ...styling}}>
    <Menu>
      {menu.map(item => (
        <Menu.Item key={item} onClick={() => handleClick(item)}>
          <span>{item}</span>
        </Menu.Item>
      ))}
    </Menu>
  </StyledDropdownMenu>
);

const Dropdown = ({
  selected, menu, handleClick, placement, styling, theme, trigger,
}) => (
  <Fragment>
    {/* <GlobalStyle theme={{ ...theme.dropdown, ...styling }}/> */}
    <StyledDropdown theme={{ ...theme.dropdown, ...styling }}>
      <DropdownAnt
        overlay={getMenu(menu, handleClick, theme, styling)}
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
