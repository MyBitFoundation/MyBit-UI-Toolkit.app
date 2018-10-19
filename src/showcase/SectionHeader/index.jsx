import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

/*
${props => props.position === "left" ? `left: 1%;` : ''}
*/

const SectionHeader = ({
    size, textColor, dividerColor, children, squareSize, position
}) => {
    const Heading = Number.isInteger(size) ? `h${size}` : `div`;

    const StyledHeading = styled(Heading)`
        font-family: Roboto;
        line-height: 2.0;
        margin: 15px 0px 0px 0px;
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
            width: ${props => props.squareSize}px;
            height: ${props => props.squareSize}px;
            background-color:  ${props => props.dividerColor};
            -webkit-transform: translate(-50%, 0%) rotate(45deg);
            transform: translate(-50%, 0%) rotate(45deg);
            ${props => props.position === "right" ? `left: 99%;` : ''}
            ${props => props.position === "center" ? `left: 50%;` : ''}
            ${props => props.position === "left" ? `margin-left: ${props.squareSize/2 + 2}px;` : ''}
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
            calculatedMargin={squareSize/2}
        >
            {children}
        </StyledHeading>
    )
}

SectionHeader.propTypes = {
    size: PropTypes.any,
    dividerColor: PropTypes.string,
    textColor: PropTypes.string,
    squareSize: PropTypes.number,
    position: PropTypes.string
};

SectionHeader.defaultProps = {
    size: 1,
    dividerColor: "#fb3448",
    textColor: "#383838",
    squareSize: 10,
    position: "center"
};

export default SectionHeader;

