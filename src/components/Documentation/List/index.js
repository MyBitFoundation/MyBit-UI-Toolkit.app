import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection } from '../../Common';
import { List, ListItem } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'

const listExample = {
    component: (
        <div>
            <List component={ListItem} items={['Item 1', 'Item2', 'Item3']} />
        </div>
    ),
    description: (
        <p>List example</p>
    ),
    code: `
        <List component={ListItem} items={['Item 1', 'Item2', 'Item3']} />
    `,
    display: 'inline-block'
}


const data = [{
    key: '1',
    property: 'items',
    description: 'Array of ListItems',
    type: 'array',
    required: 'False',
    default: '[]'
}
];

export default () => (
    <div>
        <h1>List <EditPageLink /></h1>
        <p></p>
        <InstallationSection name="List" />

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={24}>
                <h3>List example</h3>
                <Showcase data={listExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)
