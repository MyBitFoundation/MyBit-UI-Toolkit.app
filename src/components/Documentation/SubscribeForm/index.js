import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection } from '../../Common';
import { SubscribeForm } from '../../../showcase'

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/SubscribeForm/index.js"

const typesExample = {
    component: (
        <div>
            <SubscribeForm listId="general"/>
        </div>
    ),
    description: (
        <p>Subscribe forms</p>
    ),
    code: `<SubscribeForm listId="general"/>`,
    display: 'inline-block'
}

const data = [{
    key: '1',
    property: 'listId',
    description: 'List to subcribe the user to',
    type: 'string',
    required: 'True',
    default: 'general'
},{
    key: '2',
    property: 'size',
    description: 'The size of the component',
    type: 'number',
    required: 'False',
    default: ''
}];

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
