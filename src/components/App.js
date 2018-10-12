import React, { Component } from 'react';
import { Layout } from 'antd';
import { LibraryFooter, LibraryHeader, LibrarySidebar, LibraryContent } from './Sections'

class App extends Component {
  state = {
    theme: 'light',
    collapsed: false,
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
        <LibraryHeader onChangeTheme={this.changeTheme} onCollapse={this.toggleCollapsed} />
        <Layout>
          <LibrarySidebar theme={this.state.theme} collapsed={this.state.collapsed} />
          <LibraryContent />
        </Layout>
        <LibraryFooter />
      </Layout>
    );
  }
}

export default App;