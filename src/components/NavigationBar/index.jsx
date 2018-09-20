import React from 'react';
import PropTypes from 'prop-types';
import NavigationOption from '../NavigationOption';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
`

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
    menuOptions: PropTypes.array.isRequired
};

NavigationBar.defaultProps = {
    clickHandler: () => { },
};

export default NavigationBar;
