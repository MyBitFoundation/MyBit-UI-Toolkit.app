import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, PlainCode } from '../../Common';
import { Heading } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'
import { Helmet } from "react-helmet";

const headingExample = {
    component: (
        <div>
            {[1,2,3,4,5,6].map((size, i) => (
                <Heading key={`heading-${size}`} size={size}>Heading {size}</Heading>
            ))}
        </div>
    ),
    description: (
        <p>Sample headings</p>
    ),
    code: `
    <Heading size={1}>Heading one</Heading>
    `,
    display: 'block'
}


const data = [{
    key: '1',
    property: 'size',
    description: 'Hierarchy level',
    type: 'integer oneOf([1,2,3,4,5,6])',
    required: 'True',
    default: '-'
}
];

export default (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <h1>Heading <EditPageLink /></h1>
        <p></p>
        <h1>Installation</h1>
        <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}/heading
$ npm install ${MYBIT_UI_NAME}/heading`
        }</PlainCode>
        <PlainCode>{`import { Heading } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Sample headings</h3>
                <Showcase data={headingExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)





