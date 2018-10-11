import React from 'react';
import { Layout, Switch as AntdSwitch } from 'antd';

const { Header } = Layout;

const LibraryHeader = ({ onChangeTheme, onCollapse }) => (
    <Header style={{ background: '#fff', padding: "0 20", boxShadow: "0 2px 8px #f0f1f2", zIndex: 10 }}>
        <b>MyBit UI Toolkit</b>
        <span className="ant-divider" style={{ margin: '0 1em' }} />
        <AntdSwitch onChange={onChangeTheme} /> Change theme
    </Header>
);

export default LibraryHeader;