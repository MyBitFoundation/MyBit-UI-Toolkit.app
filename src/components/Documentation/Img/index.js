import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, PlainCode } from '../../Common';
import { Img } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'
import { Helmet } from "react-helmet";

const imgExample = {
    component: (
        <div>
            <Img src="https://via.placeholder.com/350x150" alt="sample imag"/>
        </div>
    ),
    description: (
        <p>Sample image</p>
    ),
    code: `
    <Img src="https://via.placeholder.com/350x150" alt="sample imag"/>
    `,
    display: 'block'
}


const data = [{
    key: '1',
    property: 'src',
    description: 'Image source',
    type: 'string',
    required: 'True',
    default: '-'
},{
    key: '2',
    property: 'alt',
    description: 'Alternative text for the image',
    type: 'string',
    required: 'True',
    default: '-'
},{
    key: '3',
    property: 'class',
    description: 'Image class',
    type: 'string',
    required: 'False',
    default: '-'
}
];

export default (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <h1>Img <EditPageLink /></h1>
        <p></p>
        <h1>Installation</h1>
        <PlainCode>{
            `$ yarn add ${MYBIT_UI_NAME}/img
$ npm install ${MYBIT_UI_NAME}/img`
        }</PlainCode>
        <PlainCode>{`import { Img } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Sample image</h3>
                <Showcase data={imgExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)
