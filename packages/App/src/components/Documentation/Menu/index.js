import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection, Playground } from '../../Common';
import Menu from '@mybit/ui.menu';

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/Menu/index.js"

const menuExample = {
    component: (
        <div>
            <div>
                <Menu 
                    styling={{color: 'black'}}
                    onClick={() => {}}
                    selectedKeys={[]}
                    mode="horizontal" items={[
                        {name: 'Menu item 1', linkTo: "#", target: "_top"},
                        {name: 'Menu item 2', linkTo: "#", target: "_top"},
                        {name: 'Menu item 3 (with submenu)', subNavigation: [
                            {name: 'subMenu item 1', linkTo: "#", target: "_top"},
                            {name: 'subMenu item 2', linkTo: "#", target: "_top"},
                        ]},
                    ]} 
                />
            </div>
            <div style={{background: '#555'}}>
                <Menu 
                    onClick={() => {}}
                    selectedKeys={[]}
                    mode="horizontal" items={[
                        {name: 'Menu item 1', linkTo: "#", target: "_top"},
                        {name: 'Menu item 2', linkTo: "#", target: "_top"},
                        {name: 'Menu item 3 (with submenu)', subNavigation: [
                            {name: 'subMenu item 1', linkTo: "#", target: "_top"},
                            {name: 'subMenu item 2', linkTo: "#", target: "_top"},
                        ]},
                    ]} 
                />
            </div>
        </div>
    ),
    description: (
        <p>Menu example</p>
    ),
    code: `<Menu mode="horizontal" items={[
    {name: 'Menu item 1', linkTo: "#", target: "_top"},
    {name: 'Menu item 2', linkTo: "#", target: "_top"},
    {name: 'Menu item 3 (with submenu)', subNavigation: [
        {name: 'subMenu item 1', linkTo: "#", target: "_top"},
        {name: 'subMenu item 2', linkTo: "#", target: "_top"},
    ]},
]} />`,
    display: 'inline-block'
}

const styling = {
    backgroundColor: 'transparent',
    color: '#ffffff',
    itemHoverColor: '#1890ff',
    itemSelectedColor: '#1890ff',
    borderBottom: `2px solid #1890ff`,
    backgroundColorItem: '#e6f7ff',
}

const data = [{
    key: '1',
    property: 'items',
    description: 'Array of objects like this one: {name, linkTo, target, subNavigation }',
    type: 'array',
    required: 'True',
    default: '-'
},{
    key: '2',
    property: 'className',
    description: 'Menu class',
    type: 'string',
    required: 'False',
    default: '-'
},{
    key: '3',
    property: 'mode',
    description: 'type of the menu; vertical, horizontal, and inline modes are supported',
    type: 'string',
    required: 'True',
    default: '-'
},{
    key: '4',
    property: 'selectedKeys',
    description: 'array with the keys of currently selected menu items',
    type: 'string[]',
    required: 'True',
    default: '-'
},{
    key: '5',
    property: 'onClick',
    description: 'callback executed when a menu item is clicked',
    type: 'function',
    required: 'True',
    default: '-'
}
];

export default (props) => (
    <div>
        <h1>{props.title} <EditPageLink editLink={EDIT_PAGE} /></h1>
        <p></p>
        <InstallationSection url={props.url} />
        <Playground styling={styling} component={(props) => (
            <Menu 
                {...props}
                onClick={(e) => {alert('you clicked ' + e.key + ' (keyPath: ' + e.keyPath + ')')}}
                selectedKeys={[]}
                mode="horizontal" items={[
                    {name: 'Menu item 1', linkTo: "#", target: "_top"},
                    {name: 'Menu item 2', linkTo: "#", target: "_top"},
                    {name: 'Menu item 3 (with submenu)', subNavigation: [
                        {name: 'subMenu item 1', linkTo: "#", target: "_top"},
                        {name: 'subMenu item 2', linkTo: "#", target: "_top"},
                    ]},
                ]} 
            />
        )}/>
        <h2>Examples</h2>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Menu example</h3>
                <Showcase data={menuExample} />
            </Col>
        </Row>


        <h2>Props</h2>
        <PropsTable data={data} />

    </div>
)
