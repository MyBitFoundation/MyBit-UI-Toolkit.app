import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const SectionHeader = ({
    size, textColor, dividerColor, children, squareSize, position
}) => {
    const Heading = Number.isInteger(size) ? `h${size}` : `div`;

    const StyledHeading = styled(Heading)`
        font-family: Roboto;
        line-height: 2.0;
        margin: 0px;
        ${props => Number.isInteger(props.size) ? `` : `font-size: ${props.size};`}
        font-weight: 800;
        font-style: normal;
        position: relative;
        text-align: ${props => props.position};
        letter-spacing: 1px;
        color: ${props => props.textColor};
        &::after {
            display: block;
            position: relative;
            content: '';
            width: ${props => props.squareSize};
            height: ${props => props.squareSize};
            background-color:  ${props => props.dividerColor};
            -webkit-transform: translate(-50%, 0%) rotate(45deg);
            transform: translate(-50%, 0%) rotate(45deg);
            ${props => props.position === "right" ? `left: 99%;` : ''}
            ${props => props.position === "center" ? `left: 50%;` : ''}
            ${props => props.position === "left" ? `left: 0%; margin-left: 10px;` : ''}
            margin-bottom: 10px;
        }
    `
    return (
        <StyledHeading 
            size={size} 
            textColor={textColor} 
            dividerColor={dividerColor}
            squareSize={squareSize}
            position={position}
        >
            {children}
        </StyledHeading>
    )
}

SectionHeader.propTypes = {
    size: PropTypes.any,
    dividerColor: PropTypes.string,
    textColor: PropTypes.string,
    squareSize: PropTypes.string,
    position: PropTypes.string
};

SectionHeader.defaultProps = {
    size: 1,
    dividerColor: "#fb3448",
    textColor: "#383838",
    squareSize: "10px",
    position: "right"
};

export default SectionHeader;

