import React from 'react';
import styled from 'styled-components'

const StyledPre = styled.pre`
    background: #f2f4f5;
    padding: 12px 20px;
    margin: 16px 0;
    overflow: auto;
    border-radius: 3px;
`

const PlainCode = (props) => (
    <StyledPre><code>{props.children}</code></StyledPre>
)

export default PlainCode