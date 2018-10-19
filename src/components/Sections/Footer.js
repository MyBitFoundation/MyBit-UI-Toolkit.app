import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components'
import { Logo } from '../../showcase'

const { Footer } = Layout;

const footerStyleLight = {
    background: "linear-gradient(114deg, rgb(0, 19, 88), rgb(18, 90, 196))",
    padding: "40px 40px 40px 20px",
    textAlign: 'center'
}

const footerStyleDark = {
    background: "#000c17",
    padding: "40px 40px 40px 20px",
    textAlign: 'center'
}

const FooterContentWrapper = styled.div`
    .copyright {
        font-size: 12px;
        color: #fff;
    }
    .logo {
        width: 100px;
        margin-bottom: 20px;
    }
`

const LibraryFooter = ({ theme }) => (
    <Footer style={theme === 'dark' ? footerStyleDark: footerStyleLight}>
        <FooterContentWrapper>
            <Logo className="logo" />
            <div className="copyright">
                Copyright © MyBit 2018. All Rights Reserved.
            </div>
        </FooterContentWrapper>
    </Footer>
)

export default LibraryFooter