import styled from 'styled-components';

const StyledDropdownMenu = styled.div`
.ant-menu-item-selected,
.ant-menu-item:hover,
.ant-menu-submenu-title:hover{
    color: ${props => props.theme.submenuColorHover};
    background-color: ${props => props.theme.submenuBackgroundColorHover};
    span {
        color: inherit;
    }
}
`

export default StyledDropdownMenu;
