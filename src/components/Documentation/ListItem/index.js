import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection } from '../../Common';
import { List, ListItem } from '../../../showcase'

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
    property: 'item',
    description: 'Content for the ListItem',
    type: 'any',
    required: 'False',
    default: '-'
}
];

export default (props) => (
    <div>
        <h1>{props.title} <EditPageLink /></h1>
        <p></p>
        <InstallationSection url={props.url} />

        <h2>Examples</h2>
        <Row gutter={16}>
            <Col span={24}>
                <h3>ListItem example</h3>
                <Showcase data={listExample} />
            </Col>
        </Row>


        <h2>Props</h2>
        <PropsTable data={data} />

    </div>
)
