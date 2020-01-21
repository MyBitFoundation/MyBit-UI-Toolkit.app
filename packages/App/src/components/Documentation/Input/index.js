import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection } from '../../Common';
import Input from '@mybit/ui.input';

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/Input/index.js"

const typesExample = {
    component: (
        <div>
            {['text', 'email', 'number'].map(type => (
                <Input key={type} type={type} placeholder="sample placeholder" hasTooltip={true} tooltipTitle="Sample tooltip"/>
            ))}
        </div>
    ),
    description: (
        <p>Input types</p>
    ),
    code: `<Input type="text"/>
<Input type="email"/>
<Input type="number"/>`,
    display: 'inline-block'
}

const data = [{
    key: '1',
    property: 'tooltipTitle',
    description: 'Input tooltip text',
    type: 'string',
    required: 'False',
    default: '-'
},{
    key: '2',
    property: 'hasTooltip',
    description: 'If the component has tooltip or not',
    type: 'bool',
    required: 'False',
    default: 'false'
},{
    key: '3',
    property: 'placeholder',
    description: 'Placeholder text for the input',
    type: 'string',
    required: 'False',
    default: '-'
},{
    key: '4',
    property: 'type',
    description: 'Input type',
    type: "string oneOf(['text', 'email', 'number'])",
    required: 'False',
    default: 'text'
},{
    key: '5',
    property: 'size',
    description: 'Input size',
    type: "string oneOf(['small', 'default', 'large'])",
    required: 'False',
    default: 'default'
},{
    key: '6',
    property: 'min',
    description: 'Minimum input value (when type is set to number)',
    type: 'number',
    required: 'False',
    default: '-Infinity'
},{
    key: '7',
    property: 'value',
    description: 'Value of the input',
    type: 'string',
    required: 'False',
    default: '-'
},{
    key: '8',
    property: 'onChange',
    description: 'callback when user input',
    type: 'function',
    required: 'False',
    default: '-'
},{
    key: '9',
    property: 'onEnterPressed',
    description: 'The callback function that is triggered when Enter key is pressed.',
    type: 'function',
    required: 'False',
    default: '-'
}
];

export default (props) => (
    <div>
        <h1>{props.title} <EditPageLink editLink={EDIT_PAGE} /></h1>
        <p></p>
        <InstallationSection url={props.url} />

        <h2>Examples</h2>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Input types</h3>
                <Showcase data={typesExample} />
            </Col>
        </Row>


        <h2>Props</h2>
        <PropsTable data={data} />

    </div>
)
