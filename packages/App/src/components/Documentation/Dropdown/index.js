import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection, Playground } from '../../Common';
import Dropdown from '@pbteja-dev/ui.kit.dropdown';

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/Dropdown/index.js"

const styling = {
    color: '#1890ff',
    colorHover: '#40a9ff',
    submenuColorHover: '#1890ff',
    submenuBackgroundColorHover: '#e6f7ff',
}

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
    code: `<Dropdown menu={['Option 1', 'Option 2', 'Option 3']} selected="Option 1" placement="bottomRight" trigger="hover" handleClick={() => {}} />`,
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
    code: `<Dropdown menu={['Option 1', 'Option 2', 'Option 3']} selected="Option 1" placement="bottomRight" trigger="hover" handleClick={() => {}} />`,
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

export default (props) => (
    <div>
        <h1>Dropdown <EditPageLink editLink={EDIT_PAGE} /></h1>
        <p></p>
        <InstallationSection url={props.url} />
        <Playground component={(props) => (
            <Dropdown styling={props.styling} menu={['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight']} selected="bottomLeft" placement="bottomLeft" trigger="hover" handleClick={() => {}} />
        )} styling={styling}/>
        <h2>Examples</h2>
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


        <h2>Props</h2>
        <PropsTable data={data} />

    </div>
)





