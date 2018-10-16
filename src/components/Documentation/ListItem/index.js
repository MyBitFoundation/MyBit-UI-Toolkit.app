import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, PlainCode } from '../../Common';
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
    property: 'item',
    description: 'Content for the ListItem',
    type: 'any',
    required: 'False',
    default: '-'
}
];

export default () => (
    <div>
        <h1>ListItem <EditPageLink /></h1>
        <p></p>
        <h1>Installation</h1>
        <PlainCode>{
            `$ yarn add ${MYBIT_UI_NAME}
$ npm install ${MYBIT_UI_NAME}`
        }</PlainCode>
        <PlainCode>{`import { ListItem } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={24}>
                <h3>ListItem example</h3>
                <Showcase data={listExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)
