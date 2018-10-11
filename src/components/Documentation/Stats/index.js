import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, PlainCode } from '../../Common';
import { Stats } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'

const statsExample = {
    component: (
        <div>
            <div>
                <Stats stats={[{ name: 'Sample1', value: 'Sample value1' }, { name: 'Undefined value' }, { name: 'Sample3', value: 'Sample value3' }]} />
            </div>
        </div>
    ),
    description: (
        <p>Stats example</p>
    ),
    code: `
    <Stats stats={[{ name: 'Sample1', value: 'Sample value1' }, { name: 'Sample2', value: 'Sample value2' }, { name: 'Sample3', value: 'Sample value3' }]} />
    `,
    display: 'block'
}


const data = [
    {
       "key": 1,
       "property": "stats",
       "description": "Array of stats objects ({name, value})",
       "type": "array",
       "required": "True",
       "default": "-"
    }
 ];

export default () => (
    <div>
        <h1>Stats <EditPageLink /></h1>
        <p></p>
        <h1>Installation</h1>
        <PlainCode>{
            `$ yarn add ${MYBIT_UI_NAME}/stats
$ npm install ${MYBIT_UI_NAME}/stats`
        }</PlainCode>
        <PlainCode>{`import { Stats } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Stats example</h3>
                <Showcase data={statsExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)
