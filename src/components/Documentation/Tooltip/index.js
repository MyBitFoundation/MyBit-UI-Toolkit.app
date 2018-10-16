import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, PlainCode } from '../../Common';
import { Switch } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'

const switchExample = {
    component: (
        <div>
            <Switch key="switch-example-1" styling={{
                checked: {
                    backgroundColor: 'blue',
                },
                unchecked: {
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                },
            }} checked onChange={() => {}} />
             <Switch key="switch-example-2" styling={{
                checked: {
                    backgroundColor: 'blue',
                },
                unchecked: {
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                },
            }} onChange={() => {}} />
        </div>
    ),
    description: (
        <p>Switch example</p>
    ),
    code: `
    <Switch key="switch-example-1" styling={{
        checked: {
            backgroundColor: 'blue',
        },
        unchecked: {
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
        },
    }} checked onChange={() => {}} />
     <Switch key="switch-example-2" styling={{
        checked: {
            backgroundColor: 'blue',
        },
        unchecked: {
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
        },
    }} onChange={() => {}} />
    `,
    display: 'inline-block'
}


const data = [
    {
       "key": 1,
       "property": "styling",
       "description": "Styling of the switch",
       "type": "object",
       "required": "True",
       "default": "-"
    }, {
        "key": 2,
        "property": "checked",
        "description": "determine whether the Switch is checked",
        "type": "boolean",
        "required": "False",
        "default": "false"
    }, {
        "key": 3,
        "property": "onChange",
        "description": "a callback function, can be executed when the checked state is changing",
        "type": "Function(checked:Boolean)",
        "required": "True",
        "default": ""
    }, {
        "key": 4,
        "property": "size",
        "description": "the size of the Switch",
        "type": "string",
        "required": "False",
        "default": "small"
    }
 ];

export default () => (
    <div>
        <h1>Switch <EditPageLink /></h1>
        <p></p>
        <h1>Installation</h1>
        <PlainCode>{
            `$ yarn add ${MYBIT_UI_NAME}
            $ npm install ${MYBIT_UI_NAME}`
        }</PlainCode>
        <PlainCode>{`import { Switch } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Switch example</h3>
                <Showcase data={switchExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)
