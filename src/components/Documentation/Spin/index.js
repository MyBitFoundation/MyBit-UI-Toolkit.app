import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, PlainCode } from '../../Common';
import { Spin } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'
import { Helmet } from "react-helmet";

const spinExample = {
    component: (
        <div>
            <Spin styling={{color: 'blue'}}size="small"/>
            <Spin styling={{color: 'blue'}}size="default"/>
            <Spin styling={{color: 'blue'}}size="large"/>
        </div>
    ),
    description: (
        <p>Spin example</p>
    ),
    code: `
    <Spin styling={{color: 'blue'}}size="small"/>
    <Spin styling={{color: 'blue'}}size="default"/>
    <Spin styling={{color: 'blue'}}size="large"/>
    `,
    display: 'inline-block'
}


const data = [
    {
       "key": 1,
       "property": "size",
       "description": "spinner size",
       "type": "oneOf(['small', 'default', 'large'])",
       "required": "False",
       "default": "small"
    }, {
        "key": 2,
        "property": "styling",
        "description": "Object containing color property",
        "type": "object",
        "required": "True",
        "default": "-"
     }
 ];

export default (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <h1>Spin <EditPageLink /></h1>
        <p></p>
        <h1>Installation</h1>
        <PlainCode>{
            `$ yarn add ${MYBIT_UI_NAME}/spin
$ npm install ${MYBIT_UI_NAME}/spin`
        }</PlainCode>
        <PlainCode>{`import { Spin } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Spin example</h3>
                <Showcase data={spinExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)
