import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection } from '../../Common';
import { StatCard } from '../../../showcase'

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
    code: `
    <StatCard key="StatCard-example-1" stat={{ name: 'Statistic...', value: '...with value' }} />
    <StatCard key="StatCard-example-2" stat={{ name: 'Stat without value' }} />
    `,
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

export default () => (
    <div>
        <h1>StatCard <EditPageLink /></h1>
        <p></p>
        <InstallationSection name="StatCard" />

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
