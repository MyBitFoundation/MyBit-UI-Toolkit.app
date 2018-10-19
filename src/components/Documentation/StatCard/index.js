import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection, Playground } from '../../Common';
import { StatCard } from '../../../showcase'

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/StatCard/index.js"

const statCardExample = {
    component: (
        <div>
            <div>
                <StatCard key="StatCard-example-1" stat={{ name: 'Statistic...', value: '...with value' }} />
                <StatCard key="StatCard-example-2" stat={{ name: 'Stat without value' }} />
            </div>
        </div>
    ),
    description: (
        <p>StatCard example</p>
    ),
    code: `<StatCard key="StatCard-example-1" stat={{ name: 'Statistic...', value: '...with value' }} />
<StatCard key="StatCard-example-2" stat={{ name: 'Stat without value' }} />`,
    display: 'inline-block'
}


const data = [
    {
       "key": 1,
       "property": "stat",
       "description": "Object with name and value properties",
       "type": "object",
       "required": "True",
       "default": "-"
    }
 ];

const styling = {
    color: '#4a4a4a',
    backgroundColor: '#fff'
}

export default (props) => (
    <div>
        <h1>StatCard <EditPageLink editLink={EDIT_PAGE} /></h1>
        <p></p>
        <InstallationSection url="StatCard" />
        <Playground styling={styling} component={(props) => (
            <div>
                <StatCard {...props} key="StatCard-example-1" stat={{ name: 'Statistic...', value: '...with value' }} />
                <StatCard {...props} key="StatCard-example-2" stat={{ name: 'Stat without value' }} />
            </div>
        )} />
        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={24}>
                <h3>StatCard example</h3>
                <Showcase data={statCardExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)
