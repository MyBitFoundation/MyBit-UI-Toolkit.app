import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu as MenuAnt } from 'antd';
import 'antd/lib/menu/style/css';
import MenuItem from '../MenuItem';
import Icon from '../Icon';
import SubMenu from '../SubMenu';
import StyledMenu from './styledMenu';
import Theme from '../theme';

class Menu extends Component {
  getMenuItem = item => (
    <MenuItem styling={this.props.styling} key={item.name}>
      {item.linkTo ? <a href={item.linkTo} target={item.target || '_blank'} key={item.name}>{item.name}</a>
      : item.name}
    </MenuItem>
  );

  getSubmenuItem = (item) => {
    const iconRight = item.iconRight && <Icon type={item.iconRight} isRight />;
    const iconLeft = item.iconLeft && <Icon type={item.iconLeft} />;
    const subItems = item.subNavigation.map(subItem => (
      <MenuItem key={subItem.name}>
        {subItem.linkTo ? <a href={subItem.linkTo} target={subItem.target || '_blank'} key={subItem.name}>{subItem.name}</a>
          : subItem.name}
      </MenuItem>
    ));

    return (
      <SubMenu key={item.name} title={<span>{iconLeft}{item.name}{iconRight}</span>}>
        {subItems}
      </SubMenu>
    );
  }

  getMenu = item => (item.subNavigation ? this.getSubmenuItem(item) : this.getMenuItem(item));

  render() {
    const {
      onClick, items, selectedKeys, mode, className, styling,
    } = this.props;
    return (
      <StyledMenu styling={{ ...Theme.menu, ...styling }}>
        <MenuAnt
          onClick={onClick}
          selectedKeys={selectedKeys}
          mode={mode}
          className={className}
        >
          {items.map(this.getMenu)}
        </MenuAnt>
      </StyledMenu>
    );
  }
}

Menu.propTypes = {
  styling: PropTypes.object, // eslint-disable-line
  onClick: PropTypes.func.isRequired,
  selectedKeys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  mode: PropTypes.string.isRequired,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

Menu.defaultProps = {
  styling: {},
  className: '',
};

export default Menu;

