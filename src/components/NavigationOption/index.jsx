/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
// TODO: Fix the JSX linting errors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    max-width: 120px;
    text-align: center;
    text-decoration: none;
    flex: 1 1;
`

const StyledNavOption = styled.div`
    height: 100%;
    width: max-content;
    margin: 0 auto;
    padding: 0px 4px;
    color: ${props => props.selectable ? '#125ac4' : '#d9d9d9'};
    border-bottom: ${props => props.selected ? '3px solid #125ac4' : 'none'};
`

const StyledImg = styled.img`
    height: 25px;
    margin-top: 18px;
`

const StyledP = styled.p`
    font-weight: bold;
    font-size: 14px;
    line-height: 1;
    margin-top: 5px;
`

const NavigationOption = ({
  name, icon, selectable, selected, url,
}) => {
  return (
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
};

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
