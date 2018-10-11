import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, PlainCode } from '../../Common';
import { Filter } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'

const filterExample = {
    component: (
        <div>
            {['filterOne', 'filterTwo (checked)', 'filterThree' ].map((filter, i) => (
                <Filter key={filter} checked={i===1}>{filter}</Filter>
            ))}
        </div>
    ),
    description: (
        <p>Sample filters</p>
    ),
    code: `
    <Filter>Filter one</Filter>
    `,
    display: 'inline-block'
}


const data = [{
    key: '1',
    property: 'checked',
    description: 'Checked status of Tag',
    type: 'boolean',
    required: 'false',
    default: 'false'
},{
    key: '2',
    property: 'styling',
    description: 'Optional styling',
    type: "object",
    required: 'False',
    default: '{}'
},{
    key: '3',
    property: 'onChange',
    description: 'Callback executed when Tag is checked/unchecked',
    type: "function",
    required: 'false',
    default: '-'
}
];

export default () => (
    <div>
        <h1>Filter <EditPageLink /></h1>
        <p></p>
        <h1>Installation</h1>
        <PlainCode>
        {`$ yarn add ${MYBIT_UI_NAME}/filter
$ npm install ${MYBIT_UI_NAME}/filter`}
        </PlainCode>
        <PlainCode>{`import { Filter } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Sample filters</h3>
                <Showcase data={filterExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)





