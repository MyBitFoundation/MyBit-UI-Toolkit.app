import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, PlainCode } from '../../Common';
import { ConnectionStatus } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'

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
    code: `
    <ConnectionStatus loading={false} network="ropsten" />
    `,
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

export default () => (
    <div>
        <h1>ConnectionStatus <EditPageLink /></h1>
        <p></p>
        <h1>Installation</h1>
        <PlainCode>{
            `$ yarn add ${MYBIT_UI_NAME}/connection-status
$ npm install ${MYBIT_UI_NAME}/connection-status`
        }</PlainCode>
        <PlainCode>{`import { ConnectionStatus } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

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





