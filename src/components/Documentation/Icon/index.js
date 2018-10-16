import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, PlainCode } from '../../Common';
import { Icon } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'
import { Helmet } from "react-helmet";

const iconExample = {
    component: (
        <div>
            {["edit", "form", "copy", "scissor", "delete", "snippets"].map((type, i) => (
                <Icon key={type} type={type}>{type} icon</Icon>
            ))}
        </div>
    ),
    description: (
        <p>Sample icons</p>
    ),
    code: `
    <Icon type="edit">Icon one</Icon>
    `,
    display: 'inline-block'
}


const data = [{
    key: '1',
    property: 'type',
    description: 'Icon type (check https://ant.design/components/icon for reference)',
    type: 'string',
    required: 'True',
    default: '-'
},{
    key: '2',
    property: 'isRight',
    description: 'Adds left margin of 5px when set to true',
    type: 'bool',
    required: 'False',
    default: 'false'
}
];

export default (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <h1>Icon <EditPageLink /></h1>
        <p></p>
        <h1>Installation</h1>
        <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}
$ npm install ${MYBIT_UI_NAME}`
        }</PlainCode>
        <PlainCode>{`import { Icon } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Sample icons</h3>
                <Showcase data={iconExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)





