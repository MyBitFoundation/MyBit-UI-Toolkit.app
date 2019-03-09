import React, { Component } from 'react';
import { Layout, BackTop, Icon } from 'antd';
import { LibraryFooter, LibraryHeader, LibrarySidebar, LibraryContent } from './Sections'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border: 3px solid white;
  background: linear-gradient(to left, #24F281, #0083FF);
  transition: all 0.5s;
  > i {
    font-size: 28px;
    color: white;
  }
  &:hover {
    border: 3px solid rgb(24, 144, 255);
    transition: all 0.5s;
  }
`

class App extends Component {
  state = {
    theme: 'light',
    collapsed: false,
    showScrollTopButton: true,
  }

  changeTheme = (value) => {
    this.setState({theme: value});
  }


  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <LibraryHeader onChangeTheme={this.changeTheme} theme={this.state.theme} />
        <Layout>
          <LibrarySidebar theme={this.state.theme} collapsed={this.state.collapsed} />
          <LibraryContent theme={this.state.theme} />
        </Layout>
        <LibraryFooter theme={this.state.theme} />
        <BackTop>
          <StyledButton><Icon type="up-circle" theme="outlined" /></StyledButton>
        </BackTop>
      </Layout>
    );
  }
}

export default App;