import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection } from '../../Common';
import ConnectionStatus from '@mybit/ui.connection-status';

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/ConnectionStatus/index.js"

const networkExample = {
    component: (
        <div>
            {['ropsten', 'main', 'loading', 'unknown'].map((network, index) => (
                <ConnectionStatus key={network} loading={network==='loading'} network={network} />
            ))}
        </div>
    ),
    description: (
        <p>Solid or outlined button</p>
    ),
    code: `<ConnectionStatus loading={false} network="ropsten" />`,
    display: 'inline-block'
}

const data = [{
    key: '1',
    property: 'network',
    description: 'name of the network your\'re connected to',
    type: 'string',
    required: 'False',
    default: 'undefined'
},{
    key: '2',
    property: 'loading',
    description: 'Indicates if the network is loading',
    type: "boolean",
    required: 'False',
    default: 'false'
}
];

export default (props) => (
    <div>
        <h1>ConnectionStatus <EditPageLink editLink={EDIT_PAGE} /></h1>
        <p></p>
        <InstallationSection url={props.url} />

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Networks</h3>
                <Showcase data={networkExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)





