import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection } from '../../Common';
import Stats from '@pbteja-dev/ui.kit.stats';

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/Stats/index.js"

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
    code: `<Stats stats={[{ name: 'Sample1', value: 'Sample value1' }, { name: 'Sample2', value: 'Sample value2' }, { name: 'Sample3', value: 'Sample value3' }]} />`,
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

export default (props) => (
    <div>
        <h1>Stats <EditPageLink editLink={EDIT_PAGE} /></h1>
        <p></p>
        <InstallationSection url={props.url} />

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
