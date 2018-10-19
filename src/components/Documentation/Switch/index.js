import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection, Playground } from '../../Common';
import { Switch } from '../../../showcase'

const switchExample = {
    component: (
        <div>
            <Switch key="switch-example-1" checked onChange={() => {}} />
            <Switch key="switch-example-2" onChange={() => {}} />
        </div>
    ),
    description: (
        <p>Switch example</p>
    ),
    code: `
<Switch key="switch-example-1" checked onChange={() => {}} />
<Switch key="switch-example-2" onChange={() => {}} />
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

const styling = {
    checkedBackgroundColor: '#1890ff',
    uncheckedBackgroundColor: 'rgba(0, 0, 0, 0.25)',
} 

export default (props) => (
    <div>
        <h1>{props.title} <EditPageLink /></h1>
        <p></p>
        <InstallationSection url={props.url} />
        <Playground styling={styling} component={(props) => (
            <React.Fragment>
                <Switch {...props} checked={true}/> Checked state
                <Switch {...props} checked={false}/> Unchecked state
            </React.Fragment>
        )}/>
        <h2>Examples</h2>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Switch example</h3>
                <Showcase data={switchExample} />
            </Col>
        </Row>


        <h2>Props</h2>
        <PropsTable data={data} />

    </div>
)
