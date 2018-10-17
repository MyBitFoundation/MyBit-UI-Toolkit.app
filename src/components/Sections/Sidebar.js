import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { Categories } from '../Documentation/categories'
import documentationRoutes from '../Documentation'

const { Sider } = Layout;
const { SubMenu, Item: MenuItem, ItemGroup: MenuItemGroup } = Menu;

class LibrarySidebarNavigation extends Component {
    render() {
        const { theme, collapsed } = this.props
        const currentPath = this.props.location.pathname
        return (
            <Sider
                width="265"
                theme={theme}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => { console.log("onBreakpoint", broken); }}
                onCollapse={(collapsed, type) => { console.log("onCollapse", collapsed, type); }}
                style={{ padding: "40px 0px" }}
            >
                <Menu theme={theme} mode="inline" inlineCollapsed={collapsed} defaultSelectedKeys={[currentPath]} style={{ height: '100%' }} defaultOpenKeys={['sub1']}>
                    <MenuItem key="/">
                        <Link to="/">
                            <Icon type="home" />
                            <span className="nav-text">Home</span>
                        </Link>
                    </MenuItem>
                    <MenuItem key="/contribute">
                        <Link to="/contribute">
                            <Icon type="deployment-unit" theme="outlined" />
                            <span className="nav-text">Contribute</span>
                        </Link>
                    </MenuItem>
                    <MenuItem key="/styleguides">
                        <Link to="/styleguides">
                            <Icon type="bg-colors" theme="outlined" />
                            <span className="nav-text">Styleguides</span>
                        </Link>
                    </MenuItem>
                    <MenuItem key="/applications">
                        <Link to="/applications">
                            <Icon type="desktop" theme="outlined" />
                            <span className="nav-text">Applications</span>
                        </Link>
                    </MenuItem>
                    <SubMenu key="sub1" title={<div><Icon type="layout" theme="outlined" /><b>Components</b></div>}>
                        {Categories.map(category => (
                            <MenuItemGroup key={category} title={category}>
                                {
                                    documentationRoutes.filter(element => element.category === category).map(element => (
                                        <MenuItem key={`/${element.url}`}>
                                            <Link to={`/${element.url}`}>
                                                <span className="nav-text">{element.title}</span>
                                            </Link>
                                        </MenuItem>
                                    ))
                                }
                            </MenuItemGroup>
                        ))
                        }
                        
                    </SubMenu>
                    
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(LibrarySidebarNavigation);