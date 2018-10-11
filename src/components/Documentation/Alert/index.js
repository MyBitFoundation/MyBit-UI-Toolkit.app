import React from 'react';
import { PropsTable, Showcase, EditPageLink, PlainCode } from '../../Common/';
import { Alert } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'
import { Helmet } from "react-helmet";

const typesExample = {
    component: (
        <div>
            {['info', 'success', 'warning', 'error'].map((type, index) => (
                <Alert
                    type={type}
                    message={`${type} message`}
                    key={`Alert-example-${index}`}
                    handleAlertClosed={() => {}}
                />
            ))}
        </div>
    ),
    description: (
        <p>Dismissable notification component</p>
    ),
    code: `
    <Alert
        type="info"
        message="Info message"
        key="Alert-example-1"
        handleAlertClosed={() => {}}
    />
    <Alert
        type="success"
        message="Success message"
        key="Alert-example-2"
        handleAlertClosed={() => {}}
    />
    <Alert
        type="warning"
        message="Warning message"
        key="Alert-example-3"
        handleAlertClosed={() => {}}
    />
    <Alert
        type="error"
        message="Error message"
        key="Alert-example-4"
        handleAlertClosed={() => {}}
    />
    `,
    display: 'inline-block'
}

const data = [{
    key: '1',
    property: 'type',
    description: 'Alert type (info, success, warning, error)',
    type: 'string',
    required: 'False',
    default: 'info'
},{
    key: '2',
    property: 'message',
    description: 'Text that will be displayed in the alert',
    type: 'string',
    required: 'True',
},{
    key: '3',
    property: 'handleAlertClosed',
    description: 'function or method to handle closing of the alert',
    type: 'function',
    required: 'True',
}
];

export default (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <h1>Alert <EditPageLink /></h1>
        <p></p>
        <h1>Installation</h1>
        <PlainCode>{
`$ yarn add ${MYBIT_UI_NAME}/alert
$ npm install ${MYBIT_UI_NAME}/alert`
        }</PlainCode>
        <PlainCode>{`import { Alert } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

        <h1>Examples</h1>
        <h3>Types</h3>
        <Showcase data={typesExample} />

        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)





