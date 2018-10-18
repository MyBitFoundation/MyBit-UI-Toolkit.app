import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import { LibraryFooter, LibraryHeader, LibrarySidebar, LibraryContent } from './Sections'
import styled from 'styled-components'

const StyledTopButton = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  > button {
    font-size: 32px;
    height: 50px;
    width: 50px;
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      collapsed: false,
      showScrollTopButton: true,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };
  
  handleScroll(event) {
    console.log("dasdasds")
    if(window.pageYOffset > 400) {
      this.setState({ showScrollTopButton: true});
      console.log('dasdasfasfgasvas')
    } else {
      this.setState({ showScrollTopButton: false});
    }
  };

  changeTheme = (value) => {
    this.setState({theme: value});
  }

  scrollTop = () => {
    window.scrollTo(0,0);
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
        {this.state.showScrollTopButton && 
          <StyledTopButton><Button type="primary" icon="up" size="large" onClick={this.scrollTop}/></StyledTopButton>
        }
      </Layout>
    );
  }
}

export default App;