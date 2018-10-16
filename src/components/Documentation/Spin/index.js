import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, PlainCode, Playground } from '../../Common';
import { Spin } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'

const spinExample = {
    component: (
        <div>
            <Spin styling={{color: 'red'}}size="small"/>
            <Spin styling={{color: 'blue'}}size="default"/>
            <Spin styling={{color: 'green'}}size="large"/>
        </div>
    ),
    description: (
        <p>Spin example</p>
    ),
    code: `
    <Spin styling={{color: 'red'}}size="small"/>
    <Spin styling={{color: 'blue'}}size="default"/>
    <Spin styling={{color: 'green'}}size="large"/>
    `,
    display: 'inline-block'
}

const styling = [{
    "key": 1,
    "property": "color",
    "description": "spinner's color",
    "type": "string",
    "required": "False",
    "default": "-"
}]

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

export default () => (
    <div>
        <h1>Spin <EditPageLink /></h1>
        <p></p>
        <h2>Installation</h2>
        <PlainCode>{
            `$ yarn add ${MYBIT_UI_NAME}
$ npm install ${MYBIT_UI_NAME}`
        }</PlainCode>

        <PlainCode>{`import { Spin } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

        <Playground component={Spin} styling={{
            color: 'blue'
        }}/>

        <h2>Examples</h2>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Spin example</h3>
                <Showcase data={spinExample} />
            </Col>
        </Row>


        <h2>Props</h2>
        <PropsTable data={data} />

        <h2>Styling</h2>
        <PropsTable data={styling} />

    </div>
)
