import React, { Component } from 'react'
import styled from 'styled-components'
import { message } from 'antd';

const Wrapper = styled.div`
    margin: 3px 0;
    width: 100%;
    height: 50px;
    background: ${props => props.color};
    display: flex;
    align-items: center;
    padding-left: 30px;
    position: relative;
    .text {
        background: ${props => props.textBackground};
        padding: 10px;
        color: ${props => props.textColor};
    }
    .title {
        position: absolute;
        left: 30px;
        transition: all 0.3s;
        opacity: 1;
    }
    &:hover > .title {
        opacity: 0;
    }
    .color {
        opacity: 0;
        position: absolute;
        left: 10px;
        transition: all 1s;
    }
    &:hover > .color {
        left: 30px;
        opacity: 1;
    }
`

class ColorShowcase extends Component {
    copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        message.info(`You copied ${str}`);
    };

    render() {
        const { color, title, textBackground, textColor } = this.props
        return (
            <Wrapper color={color} textBackground={textBackground} textColor={textColor} onClick={() => this.copyToClipboard(color)}>
                <div className="text title">
                    {title}
                </div>
                <div className="text color" >
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