import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, PlainCode } from '../../Common';
import { Dropdown } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'

const placementExample = {
    component: (
        <div>
            {['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight' ].map(placement => (
                <Dropdown key={placement} menu={['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight']} selected={placement} placement={placement} trigger="hover" handleClick={() => {}} />
            ))}
        </div>
    ),
    description: (
        <p>Position of the dropdown</p>
    ),
    code: `
    <Dropdown menu={['Option 1', 'Option 2', 'Option 3']} selected="Option 1" placement="bottomRight" trigger="hover" handleClick={() => {}} />
    `,
    display: 'inline-block'
}

const triggerExample = {
    component: (
        <div>
            {['click', 'hover', 'contextMenu'].map(trigger => (
                <Dropdown key={trigger} menu={['click', 'hover', 'contextMenu']} selected={trigger} placement="bottomCenter" trigger={trigger} handleClick={() => {}} />
            ))}
        </div>
    ),
    description: (
        <p>Show dropdown on hover or click</p>
    ),
    code: `
    <Dropdown menu={['Option 1', 'Option 2', 'Option 3']} selected="Option 1" placement="bottomRight" trigger="hover" handleClick={() => {}} />
    `,
    display: 'inline-block'
}

const data = [{
    key: '1',
    property: 'menu',
    description: 'Array of strings for each item of the menu',
    type: 'array',
    required: 'True',
    default: '-'
},{
    key: '2',
    property: 'styling',
    description: 'Optional styling',
    type: "object",
    required: 'False',
    default: '{}'
},{
    key: '3',
    property: 'selected',
    description: 'Selected item from the menu array',
    type: "string",
    required: 'True',
    default: '-'
},{
    key: '4',
    property: 'handleClick',
    description: 'Function to handle clicking of an item',
    type: "function",
    required: 'True',
    default: '-'
},{
    key: '5',
    property: 'placement',
    description: 'Position of the dropdown',
    type: "oneOf['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight']",
    required: 'True',
    default: '-'
},{
    key: '6',
    property: 'trigger',
    description: 'the trigger mode which executes the drop-down action',
    type: "oneOf['click', 'hover', 'contextMenu']",
    required: 'True',
    default: '-'
}
];

export default () => (
    <div>
        <h1>Dropdown <EditPageLink /></h1>
        <p></p>
        <h1>Installation</h1>
        <PlainCode>{
            `$ yarn add ${MYBIT_UI_NAME}/dropdown
$ npm install ${MYBIT_UI_NAME}/dropdown`
        }</PlainCode>
        <PlainCode>{`import { Dropdown } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={12}>
                <h3>Placement</h3>
                <Showcase data={placementExample} />
            </Col>
            <Col span={12}>
                <h3>Trigger</h3>
                <Showcase data={triggerExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)





