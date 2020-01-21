import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
    line-height: 20px;
    height: 22px;
    padding: 0 7px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    background: #fafafa;
    font-size: 12px;
`

const CustomTag = (props) => (
    <StyledSpan>{props.children}</StyledSpan>
)

export default CustomTag