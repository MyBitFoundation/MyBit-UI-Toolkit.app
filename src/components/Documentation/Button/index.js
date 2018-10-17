import React, { Component } from 'react';
import { Row, Col, Tabs } from 'antd';
import { PropsTable, Showcase, EditPageLink, PlainCode, Playground } from '../../Common';
import { Button } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'

const typesExample = {
    component: (
        <div>
            {['outline', 'solid'].map((type, index) => (
                <Button key={`btn-${type}-${index}`} type={type}>{type} button</Button>
            ))}
        </div>
    ),
    description: (
        <p>Solid or outlined button</p>
    ),
    code: `
    <Button type="solid">solid button</Button>
    <Button type="outline">outline button</Button>
    `,
    display: 'inline-block'
}

const colorsExample = {
    component: (
        <div>
            {['blue', 'green'].map((color, index) => (
                <Button key={`btn-${color}-${index}`}  type="solid" color={color}>{color} button</Button>
            ))}
            <Button styling={{
                backgroundColor: 'maroon',
                backgroundColorHover: 'red',
                backgroundColorActive: 'pink' 
            }} type="solid">Custom button</Button>
        </div>
    ),
    description: (
        <p>Solid buttons can be either blue or green</p>
    ),
    code: `
        <Button type="solid" color="green">green button</Button>
        <Button type="solid" color="blue">blue button</Button>
        <Button styling={{
            backgroundColor: 'maroon',
            backgroundColorHover: 'red',
            backgroundColorActive: 'pink' 
        }} type="solid">Custom button</Button>
    `,
    display: 'inline-block'
}

const sizesExample = {
    component: (
        <div>
            {['small', 'default', 'large'].map((size, index) => (
                <Button  key={`btn-${size}-${index}`}  type="outline" size={size}>{size} button</Button>
            ))}
        </div>
    ),
    description: (
        <p>Buttons come in three sizes</p>
    ),
    code: `
    <Button type="outline" size="small">"small" button</Button>
    <Button type="outline" size="default">"default" button</Button>
    <Button type="outline" size="large">"large" button</Button>
    `,
    display: 'inline-block'
}


const shapesExample = {
    component: (
        <div>
            
            <Button type="solid" shape="circle" loading></Button>
            <Button type="outline" shape="circle" loading></Button>
            
        </div>
    ),
    description: (
        <p>Solid buttons can be either blue or green</p>
    ),
    code: `
        <Button type="solid" shape="circle" loading></Button>
        <Button type="outline" shape="circle" loading></Button>
    `,
    display: 'inline-block'
}


const propsData = [{
    key: '1',
    property: 'styling',
    description: 'change the theme of the button',
    type: 'object',
    required: 'False',
    default: '{}'
},{
    key: '2',
    property: 'color',
    description: 'Pick one of the predefined colors',
    type: "oneOf(['blue', 'green'])",
    required: 'False',
    default: 'blue'
},{
    key: '3',
    property: 'type',
    description: 'Type of the button',
    type: "oneOf(['solid', 'outline'])",
    required: 'False',
    default: 'outline'
},{
    key: '4',
    property: 'active',
    description: 'Whether the button is active or not',
    type: "boolean",
    required: 'False',
    default: 'false'
},{
    key: '5',
    property: 'loading',
    description: 'Shows a spinner when set to true',
    type: "boolean",
    required: 'False',
    default: 'false'
}
];

export default class Page extends Component {
    componentDidMount() {
        document.title = this.props.pageTitle
    }
    render() {
        return (
            <div>
                <h1>Button <EditPageLink /></h1>
                <p></p>
                <h2>Installation</h2>
                <Tabs defaultActiveKey="npm">
                    <Tabs.TabPane tab="NPM" key="npm">
                        <PlainCode>{`$ npm install ${MYBIT_UI_NAME}`}</PlainCode>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Yarn" key="yarn">
                        <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}`}</PlainCode>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="BitSrc" key="bit">
                        <PlainCode>{`$ bit add ${MYBIT_UI_NAME}`}</PlainCode>
                    </Tabs.TabPane>
                </Tabs>
                <PlainCode>{
        `$ yarn add ${MYBIT_UI_NAME}
        $ npm install ${MYBIT_UI_NAME}`
                }</PlainCode>
                <PlainCode>{`import { Button } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

                <Playground component={Button} styling={{
                    color: 'white',
                    colorHover: '#40a9ff',
                    colorActive: '#096dd9',
                    backgroundColor: 'transparent',
                    backgroundColorHover: 'transparent',
                    backgroundColorActive: 'transparent',
                    borderColor: 'white',
                    borderColorHover: '#40a9ff',
                    borderColorActive: '#096dd9',
                }}/>

                <h2>Examples</h2>
                <Row gutter={16}>
                    <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                        <h3>Types</h3>
                        <Showcase data={typesExample} />
                    </Col>
                    <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                        <h3>Colors</h3>
                        <Showcase data={colorsExample} />
                    </Col>
                    <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                        <h3>Sizes</h3>
                        <Showcase data={sizesExample} />
                    </Col>
                    <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                        <h3>Shapes</h3>
                        <Showcase data={shapesExample} />
                    </Col>
                </Row>

                <h2>Props</h2>
                <PropsTable data={propsData} />
            </div>
        );
    }
}
