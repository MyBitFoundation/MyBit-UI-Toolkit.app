import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, PlainCode } from '../../Common';
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
        </div>
    ),
    description: (
        <p>Solid buttons can be either blue or green</p>
    ),
    code: `
    <Button type="solid" color="green">green button</Button>
    <Button type="solid" color="blue">blue button</Button>
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

const data = [{
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

export default () => (
    <div>
        <h1>Button <EditPageLink /></h1>
        <p></p>
        <h1>Installation</h1>
        <PlainCode>{
`$ yarn add ${MYBIT_UI_NAME}/button
$ npm install ${MYBIT_UI_NAME}/button`
        }</PlainCode>
        <PlainCode>{`import { Button } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

        <h1>Examples</h1>
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


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)





