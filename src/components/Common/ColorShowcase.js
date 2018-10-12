import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 3px 0;
    width: 100%;
    height: 50px;
    background: ${props => props.color};
    display: flex;
    align-items: center;
    padding-left: 30px;
    .text {
        background: ${props => props.textBackground};
        padding: 3px;
        color: ${props => props.textColor};
    }
    .color {
        opacity: 0;
        margin-left: 0px;
        transition: all 1s;
        overflow: auto;
    }
    &:hover > .color {
        margin-left: 15px;
        opacity: 1;
    }
`

class ColorShowcase extends Component {
    render() {
        const { color, title, textBackground, textColor } = this.props
        return (
            <Wrapper color={color} textBackground={textBackground} textColor={textColor}>
                <div className="text title">
                    {title}
                </div>
                <div className="text color">
                    {color}
                </div>
            </Wrapper>
        )
    }
}

ColorShowcase.defaultProps = {
    color: "#000",
    title: 'Undefined',
    textBackground: 'none',
    textColor: '#fff'
}

export default ColorShowcase