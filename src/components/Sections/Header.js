import React from 'react';
import { Layout } from 'antd';
import logo from './mybit-color.svg'
import styled from 'styled-components'
import { Select } from 'antd';

const Option = Select.Option;
const { Header } = Layout;

const headerStyleLight = {
    backgroundColor: '#fff',
    padding: '0 30px',
    boxShadow: '0 2px 8px #f0f1f2',
    zIndex: 10,
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left'
}

const headerStyleDark = {
    background: "#000c17",
    padding: '0 30px',
    boxShadow: '0 2px 8px #000',
    zIndex: 10,
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left'
}

const LogoColumn = styled.div`
    flex: 0 1 180px;
    > img {
        width: 100%;
    }
`

const StyledRightColumn = styled.div`
    width: 100%;
    text-align: right;
`

const LibraryHeader = ({ onChangeTheme, theme}) => (
    <Header style={theme === 'dark' ? headerStyleDark: headerStyleLight}>
        <LogoColumn>
            <img src={logo} alt="MyBit Logo" />
        </LogoColumn>
        <StyledRightColumn>
            <Select defaultValue="light" style={{ width: 120 }} onChange={onChangeTheme}>
                <Option value="light">Light theme</Option>
                <Option value="dark">Dark theme</Option>
            </Select>
        </StyledRightColumn>
    </Header>
);

export default LibraryHeader;